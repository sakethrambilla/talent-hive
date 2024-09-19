import { Label } from "@/components/ui/label";
import HomeLayout from "@/layouts/HomeLayout/HomeLayout";

function SignInPage() {
  return (
    <HomeLayout>
      <div className="flex h-screen w-full items-center justify-center p-24">
        <img
          src={
            "https://plus.unsplash.com/premium_photo-1683120751955-3d7c14887ac8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8MXwwfHx8MA%3D%3D"
          }
          className="h-full w-fit rounded-2xl bg-cover shadow-lg"
        />

        <div className="flex h-full w-1/2 flex-col items-start justify-start p-24">
          <h1 className="text-6xl font-semibold">Sign In</h1>
          <SignInForm />
        </div>
      </div>
    </HomeLayout>
  );
}

export default SignInPage;

function SignInForm() {
  return (
    <form className="flex flex-col items-start gap-12">
      <div className="flex flex-col gap-2">
        <Label></Label>
      </div>
    </form>
  );
}
