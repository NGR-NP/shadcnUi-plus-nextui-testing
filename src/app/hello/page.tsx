"use client";
import { useState } from "react";

import { NGRButton } from "@/components/ui/CButton";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";

export default function DrawerDemo() {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <NGRButton variant="outline">Open Drawer</NGRButton>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <NGRButton
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                {/* <MinusIcon className="h-4 w-4" /> */}
                icon
                <span className="sr-only">Decrease</span>
              </NGRButton>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <NGRButton
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                {/* <PlusIcon className="h-4 w-4" /> */}
                icon
                <span className="sr-only">Increase</span>
              </NGRButton>
            </div>
          </div>
          <DrawerFooter>
            <NGRButton>Submit</NGRButton>
            <DrawerClose asChild>
              <NGRButton variant="outline">Cancel</NGRButton>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
