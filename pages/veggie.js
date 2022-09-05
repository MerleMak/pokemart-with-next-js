import Image from "next/image"

export default function Veggie(){
    return (
    <>
    <h1>Headline Veggie</h1>
    <p>Short Veggie paragraph</p>
    <Image src="/pizza.jpg" width={2400} height={1597} layout="responsive"/>
    </>
    )}