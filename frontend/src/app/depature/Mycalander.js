"use client";

import React, { useState } from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import {Calendar} from "@nextui-org/calendar";
import {parseDate} from '@internationalized/date';

const CalendarPage = () => {


  return (
    <div className="Calendar">
      <div className="flex justify-between my-5">
        <div className="w-[30%] flex justify-between font-bold text-lg">
          <IoMdArrowRoundBack className="text-2xl" />
          <h2>October 2024</h2>
        </div>
        <div className="w-[30%] flex justify-between font-bold text-lg">
          <h2>November 2024</h2>
          <IoMdArrowRoundBack className="text-2xl rotate-180" />
        </div>
      </div>
        <div className="w-[100%] flex justify-between">
    <Calendar aria-label="Date (No Selection)" defaultValue={parseDate("2024-08-03")} className="flex gap-5"/>
    <Calendar aria-label="Date (Uncontrolled)" defaultValue={parseDate("2024-09-03")} className="text-gray-400 " />
        </div>
    </div>
  );
};

export default CalendarPage;
