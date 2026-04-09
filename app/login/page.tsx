"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, ArrowRight, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Login:", data);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] rounded-full bg-blue-200/35 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -right-32 w-[350px] h-[350px] rounded-full bg-purple-200/30 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-md"
      >
        <Card className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-blue-100/50 overflow-hidden">
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" />

          <CardHeader className="px-8 pt-8 pb-0">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Link href="/" className="flex items-center gap-2" id="login-logo">
                <div className="relative w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
                  <Zap className="w-5 h-5 text-white relative z-10 fill-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-slate-800">
                  Black<span className="gradient-text">clap</span>
                </span>
              </Link>
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-bold text-slate-800 mb-2">Welcome back</h1>
              <p className="text-slate-400 text-sm">Sign in to continue your journey</p>
            </div>
          </CardHeader>

          <CardContent className="px-8 py-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" id="login-form">
              {/* Email */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="login-email" className="text-slate-600 text-sm font-medium">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="you@example.com"
                    {...register("email")}
                    className={`
                      pl-10 h-11 bg-slate-50 border rounded-xl text-slate-800 placeholder:text-slate-300
                      focus:ring-1 focus:ring-blue-400/50 focus:bg-white transition-all
                      ${errors.email ? "border-red-400" : "border-slate-200 focus:border-blue-300"}
                    `}
                  />
                </div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-0.5"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="login-password" className="text-slate-600 text-sm font-medium">
                    Password
                  </Label>
                  <button
                    type="button"
                    className="text-blue-500 text-xs hover:text-blue-600 transition-colors font-medium"
                    id="login-forgot-password"
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    {...register("password")}
                    className={`
                      pl-10 pr-10 h-11 bg-slate-50 border rounded-xl text-slate-800 placeholder:text-slate-300
                      focus:ring-1 focus:ring-blue-400/50 focus:bg-white transition-all
                      ${errors.password ? "border-red-400" : "border-slate-200 focus:border-blue-300"}
                    `}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                    id="login-toggle-password"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-0.5"
                  >
                    {errors.password.message}
                  </motion.p>
                )}
              </div>

              {/* Submit */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2">
                <Button
                  type="submit"
                  id="login-submit-btn"
                  disabled={isLoading}
                  className="w-full btn-primary text-white border-0 h-11 text-sm font-semibold rounded-xl cursor-pointer group shadow-md shadow-blue-200 disabled:opacity-60"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Signing in...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Login</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  )}
                </Button>
              </motion.div>

              {/* Divider */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-slate-100" />
                <span className="text-slate-300 text-xs">or</span>
                <div className="flex-1 h-px bg-slate-100" />
              </div>

              {/* Sign up link */}
              <p className="text-center text-sm text-slate-500">
                Don&apos;t have an account?{" "}
                <Link
                  href="/signup"
                  id="login-signup-link"
                  className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Bottom text */}
        <p className="text-center text-slate-400 text-xs mt-6">
          By continuing, you agree to our{" "}
          <Link href="#" className="text-slate-500 hover:text-slate-700 transition-colors underline underline-offset-2">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-slate-500 hover:text-slate-700 transition-colors underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
