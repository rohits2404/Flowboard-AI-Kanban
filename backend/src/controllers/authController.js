import bcrypt from "bcryptjs";
import { query } from "../config/db.js"
import { signToken } from "../utils/jwt.js";
import APiError from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const EMAIL_RE = /^[^\$@]+@[^\$@]+\.[^\$@]+$/

const publicUser = (u) => ({
    id: u.id,
    name: u.name,
    email: u.email,
    avatar_url: u.avatar_url,
    created_at: u.created_at
})

export const register = asyncHandler(async (req, res) => {
  
    const name = (req.body.name || "").trim();
    const email = (req.body.email || "").trim().toLowerCase();
    const { password } = req.body;

    if (!name) throw ApiError.badRequest("Name Is Required");
    if (!EMAIL_RE.test(email))
        throw ApiError.badRequest("A Valid Email Is Required");
    if (!password || password.length < 6)
        throw ApiError.badRequest("Password Must Be At Least 6 Characters");

    const existing = await query(
        "SELECT id FROM users WHERE email = $1",
        [email]
    );

    if (existing.rows.length)
        throw ApiError.conflict("Email Is Already Registered");

    const password_hash = await bcrypt.hash(password, 10);

    const { rows } = await query(
        `INSERT INTO users (name, email, password_hash)
        VALUES ($1, $2, $3)
        RETURNING id, name, email, avatar_url, created_at`,
    [name, email, password_hash]);

    const user = rows[0];
    const token = signToken({
        id: user.id,
        email: user.email,
        name: user.name,
    });

    res.status(201).json({
        user: publicUser(user),
        token,
    });
});

export const login = asyncHandler(async (req, res) => {
  
    const email = (req.body.email || "").trim().toLowerCase();
    const { password } = req.body;

    if (!email || !password)
        throw ApiError.badRequest("Email And Password Are Required");

    const { rows } = await query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );

    const user = rows[0];

    if (!user)
        throw ApiError.unauthorized("Invalid Email Or Password");

    const valid = await bcrypt.compare(password, user.password_hash);

    if (!valid)
        throw ApiError.unauthorized("Invalid Email Or Password");

    const token = signToken({
        id: user.id,
        email: user.email,
        name: user.name,
    });

    res.json({
        user: publicUser(user),
        token,
    });
});

export const me = asyncHandler(async (req, res) => {
    const { rows } = await query(
        "SELECT id, name, email, avatar_url, created_at FROM users WHERE id = $1",
        [req.user.id]
    );
    if (!rows.length)
        throw ApiError.notFound("User Not Found");
    res.json({
        user: rows[0],
    });
});
