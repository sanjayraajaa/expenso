import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="
        min-h-screen flex flex-col items-center justify-center
        bg-gradient-to-tr from-gray-100 via-gray-50 to-gray-100
        px-4 py-12
      "
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Ccircle cx=\"50\" cy=\"50\" r=\"1\" fill=\"%23e5e7eb\" fill-opacity=\"0.15\"/%3E%3C/svg%3E')",
      }}
    >
      <Card className="w-full max-w-md rounded-3xl shadow-lg border border-gray-200 bg-white">
        <CardHeader className="px-10 pt-10">
          <CardTitle className="text-center text-3xl font-extrabold text-gray-900">
            Welcome Back
          </CardTitle>
          <p className="mt-2 text-center text-sm text-gray-500">
            Sign in to your account to continue
          </p>
        </CardHeader>

        <CardContent className="px-10 py-8 space-y-8">
          <div className="space-y-1">
            <Label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-gray-300 px-4 py-3
                placeholder-gray-400
                focus:border-indigo-600 focus:ring-indigo-600 focus:ring-1
                transition duration-200 ease-in-out
              "
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </Label>
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-gray-300 py-3 pr-11 pl-4
                  placeholder-gray-400
                  focus:border-indigo-600 focus:ring-indigo-600 focus:ring-1
                  transition duration-200 ease-in-out
                "
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-3 flex items-center text-gray-400 hover:text-indigo-600 transition focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <Button
            onClick={handleLogin}
            disabled={!email || !password}
            className={`w-full rounded-md py-3 font-semibold transition ${
              !email || !password
                ? "bg-indigo-300 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-700"
            } text-white`}
          >
            Sign In
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
