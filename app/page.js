export default function Home() {
  return (
    <main style={{
      width:'100vw',
      height:'100vh',
      background:'#000',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    }}>
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        controls={false}
        playsInline
        style={{
          width:'100%',
          height:'100%',
          objectFit:'contain'
        }}
      />
    </main>
  );
}
