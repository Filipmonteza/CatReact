function GoogleMaps() {
  return (
    <div className="ratio ratio-16x9" style={{ maxWidth: "800px", margin: "0 auto 40px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.!2d18.1016826!3d59.3468702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f774305550155%3A0x4dd1e156f524ee08!2sThe%20Pet%20Store%20G%C3%A4rdet!5e0!3m2!1ssv!2sse"
        title="The Pet Store Gärdet"
        allowFullScreen
        loading="lazy"
        style={{ border: 0, borderRadius: "8px" }}
      />
    </div>
  )
}

export default GoogleMaps
