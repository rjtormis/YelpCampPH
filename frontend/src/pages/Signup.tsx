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

function Signup() {
  return (
    <div className="flex justify-center content-center h-screen gradient rounded-xl">
      <div className="p-8 m-auto">
        <Card className="w-[500px]">
          <CardHeader>
            <CardTitle className="text-xl mb-1 text-center">Sign up</CardTitle>
            <CardDescription className="text-center">
              <p> Unlock exclusive campsites & Plan adventures! </p>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" className="mt-4" />
            <Input type="confirmPassword" placeholder="Confirm password" className="mt-4" />
            <div className="flex mt-4">
              <div className="flex my-2">
                <Checkbox id="terms" />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className=" ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Accept Terms and Conditions
                  </label>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="block">
            <Button size="xl" className="w-full">
              Sign up
            </Button>
            <p className="mt-4 text-center text-sm">
              Already have an account? <Link to="/sign-in">Sign in</Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Signup;
