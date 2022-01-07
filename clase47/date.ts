import { parse } from "https://deno.land/std@0.120.0/datetime/mod.ts";

const myDate = parse("06-01-2022", "dd-MM-yyyy");

console.log(myDate)