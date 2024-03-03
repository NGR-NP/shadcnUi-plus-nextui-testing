
"use client"
import { NGRButton } from "@/components/ui/CButton";
import { Button } from "@nextui-org/button";
import { Spinner } from "@nextui-org/spinner";
import Link from "next/link";
import { Pagination } from "@nextui-org/pagination";
import { useRouter } from "next/navigation"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { Suspense } from "react";
export default function HomePage() {
  const router = useRouter()

  const handleNavigate = (page: number) => {
    router.push("/" + page, { scroll: true })
  }
  return (
    <div>
      <div className="space-y-4 flex gap-3">
        <h1 className="blue">hello</h1>
        <NGRButton>
          <Link href="/">hello</Link>
        </NGRButton>
        <NGRButton asChild>
          <Link href="/hello"> something</Link>
        </NGRButton>

        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          something
        </Button>
        <Pagination total={10} initialPage={1} onChange={handleNavigate} />
      </div>
      <div>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="dragable">
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="name">Name</label>
                  <input id="name" placeholder="Name of your project" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <label htmlFor="framework">Framework</label>
                  <select>
                    <option value="next">Next.js</option>
                    <option value="sveltekit">SvelteKit</option>
                    <option value="astro">Astro</option>
                    <option value="nuxt">Nuxt.js</option>
                  </select>
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <NGRButton variant="outline">Cancel</NGRButton>
            <Button className="bg-secondary">Deploy</Button>
          </CardFooter>
        </Card>
      </div>
      <ThemeSwitcher />
      <Suspense fallback={<p>...</p>} >
        <Spinner color="success" labelColor="success" />
      </Suspense>

    </div>
  );
}
