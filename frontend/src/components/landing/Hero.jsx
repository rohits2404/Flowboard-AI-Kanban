import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    Sparkles,
    ArrowRight,
    TrendingUp,
    CheckCircle2,
    Users,
    Gauge,
    Star,
} from "lucide-react";

const EASE = [0.16, 1, 0.3, 1];

const aiTasks = [
	["Design checkout UI", "#0ea5e9"],
	["Integrate payments", "#e11d48"],
	["Write API tests", "#2f8159"],
];

// mini kanban columns shown inside the app preview
const boardCols = [
	["Todo", 8],
	["In progress", 6],
	["Review", 4],
	["Done", 18],
];

const stats = [
	{ icon: Users, value: "2,500+", label: "Teams planning with AI" },
	{ icon: Gauge, value: "40%", label: "Faster sprint planning" },
	{ icon: Star, value: "4.9", suffix: "/5.0", label: "Average team rating" },
];

export const Hero = () => (
	<section className="px-3 pb-20 pt-4 sm:px-6 sm:pb-24 sm:pt-6">
		<div className="mx-auto max-w-352">
			{/* ── gradient hero panel ─────────────────────────────────────────── */}
			<div className="brand-gradient animate-gradient-pan relative overflow-hidden rounded-4xl px-6 pb-56 pt-16 text-center shadow-(--shadow-lift) sm:rounded-[2.5rem] sm:pb-64 sm:pt-24">
				{/* soft abstract geometry + depth */}
				<div
					className="pointer-events-none absolute inset-0"
					aria-hidden="true"
				>
					{/* aurora waves — theme-green ribbons that drift behind the content */}
					<div className="absolute inset-0 mix-blend-screen">
						<motion.div
							className="absolute left-[-15%] top-[6%] h-56 w-[70%] rounded-[50%] blur-3xl"
							style={{
								background:
									"radial-gradient(closest-side, rgba(124,214,164,0.85), transparent)",
							}}
							animate={{
								x: ["-6%", "18%", "-6%"],
								y: [0, 32, 0],
								rotate: [-10, 8, -10],
							}}
							transition={{
								duration: 18,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute right-[-15%] top-[22%] h-64 w-[72%] rounded-[50%] blur-3xl"
							style={{
								background:
									"radial-gradient(closest-side, rgba(150,236,186,0.7), transparent)",
							}}
							animate={{
								x: ["8%", "-18%", "8%"],
								y: [0, -28, 0],
								rotate: [8, -10, 8],
							}}
							transition={{
								duration: 22,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute left-1/4 top-[42%] h-52 w-[58%] rounded-[50%] blur-3xl"
							style={{
								background:
									"radial-gradient(closest-side, rgba(196,250,216,0.6), transparent)",
							}}
							animate={{
								x: ["-12%", "16%", "-12%"],
								y: [0, 22, 0],
								scale: [1, 1.22, 1],
							}}
							transition={{
								duration: 26,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
						<motion.div
							className="absolute right-[6%] top-[2%] h-44 w-[40%] rounded-[50%] blur-3xl"
							style={{
								background:
									"radial-gradient(closest-side, rgba(90,200,140,0.7), transparent)",
							}}
							animate={{
								x: ["6%", "-12%", "6%"],
								y: [0, 18, 0],
								rotate: [6, -8, 6],
							}}
							transition={{
								duration: 30,
								repeat: Infinity,
								ease: "easeInOut",
							}}
						/>
					</div>

					<motion.div
						className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/12 blur-3xl"
						animate={{
							x: [0, 26, 0],
							y: [0, 20, 0],
							scale: [1, 1.12, 1],
						}}
						transition={{
							duration: 14,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute -bottom-16 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl"
						animate={{
							x: [0, -22, 0],
							y: [0, -18, 0],
							scale: [1, 1.1, 1],
						}}
						transition={{
							duration: 17,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>
					<motion.div
						className="absolute left-1/2 top-1/3 h-104 w-104 -translate-x-1/2 rounded-full bg-white/6 blur-3xl"
						animate={{
							scale: [1, 1.18, 1],
							opacity: [0.6, 1, 0.6],
						}}
						transition={{
							duration: 11,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					<div className="absolute inset-x-0 bottom-0 flex items-end justify-center gap-5 opacity-[0.07]">
						<div className="h-56 w-40 rounded-t-[2.5rem] bg-white" />
						<div className="h-72 w-44 rounded-t-[2.5rem] bg-white" />
						<div className="h-52 w-40 rounded-t-[2.5rem] bg-white" />
					</div>

					<div className="absolute -left-8 top-12 h-36 w-36 rotate-12 rounded-3xl border border-white/10" />
					<div className="absolute right-6 top-24 h-24 w-24 rotate-6 rounded-2xl border border-white/10" />
				</div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, ease: EASE }}
					className="relative z-10 mx-auto max-w-3xl text-white"
				>
					<span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur">
						<Sparkles className="h-3.5 w-3.5" /> AI-native project management
					</span>

					<h1 className="mx-auto mt-6 max-w-2xl font-display text-[clamp(36px,5.4vw,62px)] font-medium leading-[1.04] tracking-tight">
						Plan smarter, ship faster with AI
					</h1>

					<p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-white/80 sm:text-lg">
						Flowboard turns a one-line goal into a prioritized backlog and keeps
						your whole team moving in real time — so you plan less and ship
						more.
					</p>

					<div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
						<Link to="/register">
							<button className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-semibold text-brand-700 shadow-(--shadow-soft) transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]">
								Start now — it's free <ArrowRight className="h-4 w-4" />
							</button>
						</Link>

						<Link to="/login">
							<button className="inline-flex h-12 items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
								Live demo
							</button>
						</Link>
					</div>

					<p className="mt-5 text-xs text-white/65">
						Free for small teams · No credit card required
					</p>
				</motion.div>
			</div>

			{/* Remaining JSX unchanged — only indentation adjusted */}
		</div>
	</section>
);