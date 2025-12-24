                import {mycollection}  from "./script2.js";

                let audio = new Audio(mycollection[0].songaudio);

                const play_btn = document.querySelector('.play-btn');

                let playing = true;

                let myprogressbar = document.getElementById('range');

                myprogressbar.value = 0;
                let progress = 0;


                function plays(){
                    if(progress == 100 || audio.currentTime == audio.duration) {
                        audio.play();
                    }
                }
            
                function while_playing(){
                    audio.addEventListener('timeupdate',function(){
                        progress = parseInt((audio.currentTime/audio.duration)*100);
                        myprogressbar.value = progress;
                        plays();
                    });


                    myprogressbar.addEventListener('change',function(){
                        audio.currentTime = myprogressbar.value*audio.duration/100;
                        plays();
                    });
                }
            

                play_btn.addEventListener('click',function(){
                    if(playing){
                        audio.play();
                        while_playing();
                        play_btn.innerHTML = '<img class="play" src="pause.png">';
                        playing = false;
                    }
                    else{
                        audio.pause();
                        play_btn.innerHTML = '<img class="play" src="play-button.png">';
                        playing = true;
                    }
                });


                let key = 0;
                document.querySelector('.previous-btn').addEventListener('click',function(){
                    audio.pause();
                    if(key == 0) key = mycollection.length;
                    document.querySelector('.box').innerHTML = `<img class="image" src="${mycollection[key-1].songimage}">`;
                    document.querySelector('.song-name').innerHTML = mycollection[key-1].songname;
                    document.querySelector('.singer').innerHTML = mycollection[key-1].singer;
                    //audio.pause();
                    play_btn.innerHTML = '<img class="play" src="play-button.png">';
                    playing = true;
                    audio = new Audio(mycollection[key-1].songaudio);
                    
                    myprogressbar.value = 0;

                    key = key-1;

                });

                document.querySelector('.next-btn').addEventListener('click',function () {
                    audio.pause();
                    if(key == mycollection.length-1) key = mycollection.length-key-2;
                    document.querySelector('.box').innerHTML = `<img class="image" src="${mycollection[key+1].songimage}">`;
                    document.querySelector('.song-name').innerHTML = mycollection[key+1].songname;
                    document.querySelector('.singer').innerHTML = mycollection[key+1].singer;
                    //audio.pause();
                    play_btn.innerHTML = '<img class="play" src="play-button.png">';
                    playing = true;
                    audio = new Audio(mycollection[key+1].songaudio);

                    myprogressbar.value = 0;

                    key = key + 1;
                });