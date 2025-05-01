import { Catalog, Filters } from "@/components";
import { Header } from "@/components/header";
import { TopBar } from "@/components/top-bar";
import { Container } from "@/components/ui";

export default function Home() {
  return (
    <>
      <Header className="mb-3" />
      <TopBar className="mb-5" />
      <Container className="flex gap-10">
<<<<<<< HEAD
        <Filters className="max-w-[200px] sticky" />
        <div className="grid gap-8">
          <Catalog
            categoryId={1}
=======
        <Filters className="max-w-[200px]" />
        <div className="grid gap-8">
          <Catalog
>>>>>>> e30d10096888b2ead7692d458102fd67070bca50
            title={"Пиццы"}
            items={[
              {
                id: 1,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 2,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 3,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 4,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 5,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 6,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
            ]}
          />
          <Catalog
<<<<<<< HEAD
            categoryId={2}
=======
>>>>>>> e30d10096888b2ead7692d458102fd67070bca50
            title={"Напитки"}
            items={[
              {
                id: 1,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 2,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 3,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 4,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 5,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
              {
                id: 6,
                title: "Пицца с томатами",
                ingredients: "Моцарелла, томаты",
                items: [{ price: 500 }],
                imgUrl: "/image.png",
              },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
