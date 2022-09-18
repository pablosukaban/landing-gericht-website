import React from 'react';

const VideoPlayer = () => {
    return (
        <section>
            <div className={'max-w-full mt-12 lg:mt-0'}>
                <div className={'relative aspect-video'}>
                    <video
                        controls={true}
                        autoPlay={false}
                        muted={true}
                        loop={true}
                        preload={'metadata'}
                        className={'absolute top-0 left-0 w-full h-full'}
                    >
                        <source
                            src={'src/assets/meal.mp4'}
                            type={'video/mp4'}
                        />
                    </video>
                </div>
            </div>
        </section>
    );
};

export default VideoPlayer;
