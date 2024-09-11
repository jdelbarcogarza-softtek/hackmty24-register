import Image from "next/image"
import { SignupForm } from "@/components/SignupForm"

export const description =
  "A login page with two columns. The first column has the login form with email and password. There's a Forgot your passwork link and a link to sign up if you do not have an account. The second column has a cover image."

export default function Login() {
  return (
    <div className="w-full flex flex-col justify-center bg-red-200 lg:grid min-h-dvh lg:grid-cols-2">
      <div className="flex items-center justify-center h-full px-4 py-12">
        <SignupForm />
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/placeholder.svg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
