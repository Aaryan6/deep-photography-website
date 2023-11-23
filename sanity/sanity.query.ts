import { groq } from "next-sanity";

import { client } from "./lib/client";

export async function getWeddingImages() {
  return client.fetch(
    groq`*[_type == "wedding"]{
      image
    }`
  );
}

export async function getPreWeddingImages() {
  return client.fetch(
    groq`*[_type == "wedding"]{
      image
    }`
  );
}

export async function getMaternityImages() {
  return client.fetch(
    groq`*[_type == "wedding"]{
      image
    }`
  );
}

export async function getCinematicImages() {
  return client.fetch(
    groq`*[_type == "wedding"]{
      image
    }`
  );
}

export async function getSliderImages() {
  return client.fetch(
    groq`*[_type == "slider-images"]{
      image
    }`
  );
}
