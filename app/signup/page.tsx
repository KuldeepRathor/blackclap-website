"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Eye, EyeOff, Zap, ArrowRight, Mail, Lock, User, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const signupSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/[A-Z]/, "Must contain at least one uppercase letter")
    .regex(/[0-9]/, "Must contain at least one number"),
});

type SignupFormData = z.infer<typeof signupSchema>;

const passwordRequirements = [
  { label: "At least 8 characters", test: (v: string) => v.length >= 8 },
  { label: "One uppercase letter",  test: (v: string) => /[A-Z]/.test(v) },
  { label: "One number",            test: (v: string) => /[0-9]/.test(v) },
];

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupFormData>({ resolver: zodResolver(signupSchema) });

  const passwordValue = watch("password", "");

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    await new Promise((r) => setTimeout(r, 1800));
    console.log("Signup:", data);
    setIsLoading(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-sm"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="w-20 h-20 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mx-auto mb-6 shadow-md shadow-green-100"
          >
            <CheckCircle2 className="w-10 h-10 text-green-500" />
          </motion.div>
          <h2 className="text-2xl font-bold text-slate-800 mb-3">Account created! 🎉</h2>
          <p className="text-slate-500 text-sm mb-8">
            Welcome to Blackclap! You&apos;re all set to start connecting with your community.
          </p>
          <Link href="/login" id="signup-success-login-btn">
            <Button className="btn-primary text-white border-0 px-6 rounded-xl shadow-md shadow-blue-200">
              Go to Login
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 pt-20 pb-12 relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full bg-purple-200/30 blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 -left-32 w-[350px] h-[350px] rounded-full bg-blue-200/30 blur-3xl animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full max-w-md"
      >
        <Card className="bg-white border border-slate-200/80 rounded-2xl shadow-xl shadow-purple-100/50 overflow-hidden">
          {/* Top gradient bar */}
          <div className="h-1 w-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500" />

          <CardHeader className="px-8 pt-8 pb-0">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <Link href="/" className="flex items-center gap-2" id="signup-logo">
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
              <h1 className="text-2xl font-bold text-slate-800 mb-2">Create your account</h1>
              <p className="text-slate-400 text-sm">Join thousands already on Blackclap</p>
            </div>
          </CardHeader>

          <CardContent className="px-8 py-8">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" id="signup-form">

              {/* Name */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-name" className="text-slate-600 text-sm font-medium">
                  Full name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="signup-name"
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className={`
                      pl-10 h-11 bg-slate-50 border rounded-xl text-slate-800 placeholder:text-slate-300
                      focus:ring-1 focus:ring-blue-400/50 focus:bg-white transition-all
                      ${errors.name ? "border-red-400" : "border-slate-200 focus:border-blue-300"}
                    `}
                  />
                </div>
                {errors.name && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">
                    {errors.name.message}
                  </motion.p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-email" className="text-slate-600 text-sm font-medium">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="signup-email"
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
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">
                    {errors.email.message}
                  </motion.p>
                )}
              </div>

              {/* Password */}
              <div className="flex flex-col gap-2">
                <Label htmlFor="signup-password" className="text-slate-600 text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <Input
                    id="signup-password"
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
                    id="signup-toggle-password"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} className="text-red-500 text-xs">
                    {errors.password.message}
                  </motion.p>
                )}

                {/* Password Requirements */}
                {passwordValue && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="flex flex-col gap-1.5 mt-1 p-3 rounded-xl bg-slate-50 border border-slate-100"
                  >
                    {passwordRequirements.map((req, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div
                          className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                            req.test(passwordValue) ? "bg-green-500" : "bg-slate-300"
                          }`}
                        />
                        <span
                          className={`text-xs transition-colors ${
                            req.test(passwordValue) ? "text-green-600 font-medium" : "text-slate-400"
                          }`}
                        >
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>

              {/* Submit */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-2">
                <Button
                  type="submit"
                  id="signup-submit-btn"
                  disabled={isLoading}
                  className="w-full btn-primary text-white border-0 h-11 text-sm font-semibold rounded-xl cursor-pointer group shadow-md shadow-blue-200 disabled:opacity-60"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      <span>Creating account...</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span>Create Account</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  )}
                </Button>
              </motion.div>

              {/* Login link */}
              <p className="text-center text-sm text-slate-500">
                Already have an account?{" "}
                <Link
                  href="/login"
                  id="signup-login-link"
                  className="text-blue-500 hover:text-blue-600 font-semibold transition-colors"
                >
                  Sign in
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Bottom text */}
        <p className="text-center text-slate-400 text-xs mt-6">
          By creating an account, you agree to our{" "}
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
