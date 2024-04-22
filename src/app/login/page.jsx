"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReloadIcon } from "@radix-ui/react-icons";
import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { toast } from "react-toastify";

export default function Dashboard() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    // e.preventDefault();
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
    <div>
      <header className="h-20 bg-navGreen text-gray-50 font-semibold flex items-center px-20 text-xl gap-2">
        <img src="/logo.png" alt="asdad" className="rounded-full h-14 w-14" />
        <p>TG-Legal Tracker (MA & UD)</p>
      </header>
      <div className="w-full md:grid  md:grid-cols-2 h-[calc(100vh-80px)]">
        <div className="hidden bg-muted md:block">
          <img src="/court_h.jpeg" alt="Image" className=" w-full h-full" />
        </div>
        <div className=" hidden bg-muted md:block absolute w-1/2  bg-black/20 h-full"></div>
        <div className="flex items-center justify-center py-12 h-full">
          <div className="mx-auto grid w-3/4 lg:w-3/5 gap-6">
            <Tabs defaultValue="officer" className="w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="officer">Officer</TabsTrigger>
                <TabsTrigger value="citizen">Citizen</TabsTrigger>
              </TabsList>
              <TabsContent value="officer">
                <Card>
                  <CardHeader>
                    <CardTitle>Officer Login </CardTitle>
                    <CardDescription>
                      Please enter your username and password
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="name">Username</Label>
                      <Input
                        id="name"
                        placeholder="username"
                        value={formData.username}
                        onChange={(e) =>
                          setFormData({ ...formData, username: e.target.value })
                        }
                      />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="password">Password</Label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={handleSubmit}>Submit</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
              <TabsContent value="citizen">
                <Card>
                  <CardHeader>
                    <CardTitle>Citizen</CardTitle>
                    <CardDescription>
                      Change your password here. After saving, you'll be logged
                      out.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="space-y-1">
                      <Label htmlFor="current">username</Label>
                      <Input id="current" placeholder="username" />
                    </div>
                    <div className="space-y-1">
                      <Label htmlFor="new">password</Label>
                      <Input
                        id="new"
                        type="password"
                        placeholder={"password"}
                      />
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button disabled>login</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
