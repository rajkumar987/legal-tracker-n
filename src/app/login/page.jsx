"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("/api/login", formData)
      .then((res) => {
        setCookie("isAuthenticated", true);
        router.replace("/dashboard");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message, {
          position: "top-right",
          autoClose: 1000,
        });
      })
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    const isAuthenticated = getCookie("isAuthenticated");
    if (isAuthenticated) router.replace("/dashboard");
  }, []);
  return (
    <div className="w-full md:grid md:min-h-[600px] md:grid-cols-2 h-screen">
      <div className="hidden bg-muted md:block">
        <img src="/court_h.jpeg" alt="Image" className="h-screen w-full " />
      </div>
      <div className=" hidden bg-muted md:block absolute w-1/2 h-full bg-black/60"></div>
      <div>
        <div className="flex items-center justify-center py-12 h-full">
          <div className="mx-auto grid w-3/4 lg:w-3/5 gap-6">
            <div className="grid gap-2 ">
              <div className="flex gap-2 items-center justify-center px-14 my-14">
                <img src={"/court.png"} className="w-10 h-10" />
                <h1 className="text-xl font-semibold mt-2">Legal Tracker</h1>
              </div>
              <h1 className="text-2xl font-bold">Login</h1>
              <p className="text-sm text-muted-foreground">
                Please enter your username and password to login.
              </p>
            </div>
            <form className="grid gap-4" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={formData.username}
                  placeholder="Your username"
                  required
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  required
                  type="password"
                  placeholder="Your Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>
              <Button
                className="w-full cursor-pointer"
                type="submit"
                disabled={loading}
              >
                {loading && (
                  <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                )}
                Login
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
