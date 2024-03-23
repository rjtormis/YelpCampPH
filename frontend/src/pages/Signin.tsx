import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="flex justify-center content-center h-screen gradient rounded-xl">
      <div className="p-8 m-auto">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-xl text-center">Welcome!</CardTitle>
            <CardDescription className="text-center">
              Sign In to access your dashboard,settings and campsites
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" className="mt-4" />
            <div className="flex justify-center mt-4">
              <div className="flex m-auto">
                <Checkbox id="rememberMe" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="rememberMe"
                    className=" ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Keep me signed in
                  </label>
                </div>
              </div>

              <div className="ml-32">
                <Button variant="link">Forgot Password</Button>
              </div>
            </div>
          </CardContent>
          <CardFooter className="block">
            <Button size="xl" className="w-full">
              Sign in
            </Button>
            <p className="mt-4 text-center text-sm">
              Don't have an account? <Link to="/sign-up">Sign up</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Signin;
