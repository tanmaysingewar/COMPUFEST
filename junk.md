  const playBackwards = () => {
    console.log("play backwards");
    const video = bgRef.current;
    if (!video) return;
    console.log("play backwards 222")
    video.pause();

    const fps = 18;
    const intervalRewind = setInterval(() => {
      if (video.currentTime <= 0) {
        clearInterval(intervalRewind);
        video.pause();
      } else {
        video.currentTime -= 1 / fps;
      }
    }, 1000 / fps);
  };


  {/* <div className='grid sm:grid-cols-2 gap-2 max-w-lg font-bold tracking-tight font-port mt-10'>
          <p>Data : 16 August 2024</p>
          <p>Time : 10 AM</p>
          <p>Duration : 30 mins</p>
          <p>Venue : CT Department</p>
        </div> */}