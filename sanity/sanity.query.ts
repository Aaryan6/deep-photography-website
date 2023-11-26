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
    groq`*[_type == "pre-wedding-shoot"]{
      image
    }`
  );
}

export async function getMaternityImages() {
  return client.fetch(
    groq`*[_type == "maternity-shoot"]{
      image
    }`
  );
}

export async function getCinematicImages() {
  return client.fetch(
    groq`*[_type == "cinematic-shoot"]{
      image
    }`
  );
}

export async function getBirthdayImages() {
  return client.fetch(
    groq`*[_type == "birthday-shoot"]{
      image
    }`
  );
}

export async function getPreBirthdayImages() {
  return client.fetch(
    groq`*[_type == "pre-birthday-shoot"]{
      image
    }`
  );
}

export async function getAnniversaryImages() {
  return client.fetch(
    groq`*[_type == "anniversary-shoot"]{
      image
    }`
  );
}

export async function getNewBornBabyImages() {
  return client.fetch(
    groq`*[_type == "new-born-baby-shoot"]{
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

export async function getPagesSliderImages() {
  return client.fetch(
    groq`*[_type == "pages-slider"]{
      image,
      type
    }`
  );
}

export async function getGadgetsImages() {
  return client.fetch(
    groq`*[_type == "gadgets"]{
      image
    }`
  );
}
