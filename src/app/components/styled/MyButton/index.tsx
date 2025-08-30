"use client";
import { Button, ButtonProps, Calendar, CalendarProps } from "@heroui/react";

// heroui - customize thanh bat ki hinh dang nao
export const MyButton = (props: ButtonProps) => {
  return (
    <Button
      radius="full"
      className="font-bold border-t border-white shadow-md"
      {...props}
    />
  );
};

// custom cuon lich theo y anh
// classNames
// HeroUI ~ fully custimize
// Customize tung element de tao ra output dung
export const MyCalendar = (props: CalendarProps) => {
  return <Calendar classNames={{
    nextButton: "text-red-500",
    header: "bg-teal-500",
    title: "text-green-500"
  }} {...props} />;
};
