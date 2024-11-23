import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BusinessHours } from '@/app/types/menu';

const defaultSchedule: BusinessHours = {
  monday: { isOpen: false, openTime: "12:00", closeTime: "23:00" },
  tuesday: { isOpen: false, openTime: "12:00", closeTime: "23:00" },
  wednesday: { isOpen: false, openTime: "12:00", closeTime: "23:00" },
  thursday: { isOpen: true, openTime: "12:00", closeTime: "23:00" },
  friday: { isOpen: true, openTime: "12:00", closeTime: "23:00" },
  saturday: { isOpen: true, openTime: "12:00", closeTime: "23:00" },
  sunday: { isOpen: false, openTime: "12:00", closeTime: "23:00" },
};

// Función para obtener los horarios del negocio
export const getBusinessHours = (): BusinessHours => {
  try {
    const filePath = path.join(process.cwd(), "content/business-hours/horarios.md");
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);
    return data as BusinessHours;
  } catch (error) {
    console.error('Error reading business hours:', error);
    return defaultSchedule;
  }
};

export async function GET() {
  try {
    const schedule = getBusinessHours();
    return NextResponse.json(schedule);
  } catch (error) {
    console.error('Error in business hours handler:', error);
    return NextResponse.json(defaultSchedule);
  }
}