"use server"

export async function fetchExternalData() {
  const response = await fetch('http://localhost:5000/api/v1/product/all');
  const data = await response.json();
  return data;
};