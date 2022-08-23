export default function Home({
  bgImage,
  bgSizeX,
  bgSizeY
}) {
  return (
    <h1 style={{
      backgroundImage: `url("${bgImage}")`,
      backgroundRepeat: `no-repeat`,
      width: bgSizeX,
      height: bgSizeY
      }} 
      className="text-3xl font-bold underline">
      Hello world!
    </h1>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      bgImage: 'https://picsum.photos/200',
      bgSizeX: 200,
      bgSizeY: 200
    }, // will be passed to the page component as props
  }
}