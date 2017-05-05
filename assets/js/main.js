$(function () {

    var $tempo = bpm_calculator($('.tempo').val());
    var _step = 1;
    var _clock = -1;
    var _playing = false;

    // audio players
    var $Kick = document.createElement('audio');
    var $Snare = document.createElement('audio');
    var $hat = document.createElement('audio');
    var $perc = document.createElement('audio');
    var allSounds = $.makeArray([$Kick, $Snare, $hat, $perc]);
    var _soundMap = {
        "kick": $Kick,
        "snare": $Snare,
        "hat": $hat,
        "perc": $perc
    };

    loadKit();
    //---

    $(".kit").change(function () {
        loadKit($(this).val());
    });

    $('.tempo').change(function () {
        $tempo = bpm_calculator($('.tempo').val());
        if (_playing) restartClock();
    });

    $(".switch").click(function () {
        $(this).toggleClass('on');
        if (!_playing && $(this).hasClass('on')) {
            s = _soundMap[$(this).parent().data('sound')];
            s.currentTime = 0;
            s.play();
        }
    })

    /**
     * Loads kit identified by supplied key
     * @param {string} key
     */
    function loadKit(key) {
        key = (typeof (key) != 'undefined') ? key : 'default';
        if (typeof (_kit[key]) != 'undefined') {
            var k = _kit[key];

            $($Kick).attr('src', k.kick);
            $($Snare).attr('src', k.snare);
            $($hat).attr('src', k.hat);
            $($perc).attr('src', k.perc);

            console.log("Load kit :: " + key);
        }
    }

    $(".playbtn").click(function () {
        $(this).toggleClass('yes');

        if ($(this).hasClass('yes')) startClock();
        else stopClock();
    });

    /**
     * Beat maker function itself
     */
    function makeBeats() {
        _step = _step == 16 ? 1 : _step + 1;
        paint(_step);
        for (s in _soundMap) {
            if ($('#' + s + '-' + _step).hasClass('on')) {
                _s = _soundMap[s];
                _s.currentTime = 0;
                _s.play();
            }
        }
    }

    /**
     * Lights up active column
     * @param {number} index
     */
    function paint(index) {
        $('.lit').removeClass('lit');
        $('.c'+index).addClass('lit');
        console.log(index);
    }

    /**
     * Starts the beats clock
     */
    function startClock() {
        _playing = true;
        _step = 0;
        makeBeats();
        _clock = setInterval(makeBeats, 1000 * $tempo / 4);
        $(".playbtn").text("Pause");
    }

    /**
     * Stops the beats clock
     */
    function stopClock() {
        _playing = false;
        clearInterval(_clock);
        $('.lit').removeClass('lit');
        $(".playbtn").text("Play");
    }

    /**
     * Restarts the beats clock
     */
    function restartClock() {
        stopClock();
        startClock();
    }

    /**
     * Converts BPM (beats per minute) to BPS (beats per second)
     * @param   {number}   $bpm
     * @returns {number}
     */
    function bpm_calculator($bpm) {
        return 60 / $bpm;
    }
});
