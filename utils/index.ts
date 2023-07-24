import { FilterProps } from "@/types";
import { type } from "os";

export const fetchCars = async (filters: FilterProps) => {
  const { fuel, limit, manufacturer, model, year } = filters;

  const headers = {
    "X-RapidAPI-Key": "a4ad916fd1msh50ac5f22a534778p1aa83fjsnc6bb6f292d7b",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`,
    { headers: headers }
  );
  const result = await response.json();
  return result;
};

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};
