//desktop version only
document.addEventListener('DOMContentLoaded', () => {
    const start = document.getElementById('start')
    const backHome = document.getElementById('back-home')
    let result = document.getElementById('result')
    const correct1 = document.querySelector('.correct1')
    const correct2 = document.querySelector('.correct2')
    const correct3 = document.querySelector('.correct3');
    const correct4 = document.querySelector('.correct4')
    const correct5 = document.querySelector('.correct5')
    const correct6 = document.querySelector('.correct6')
    const correct7 = document.querySelector('.correct7')
    const correct8 = document.querySelector('.correct8')
    const correct9 = document.querySelector('.correct9')
    const correct10 = document.querySelector('.correct10')
    const next1 = document.getElementById('next1')
    const next2 = document.getElementById('next2')
    const next3 = document.getElementById('next3')
    const next4 = document.getElementById('next4')
    const next5 = document.getElementById('next5')
    const next6 = document.getElementById('next6')
    const next7 = document.getElementById('next7')
    const next8 = document.getElementById('next8');
    const next9 = document.getElementById('next9');
    const submit = document.getElementById('submit')
    const previous2 = document.getElementById('previous2')
    const previous3 = document.getElementById('previous3')
    const previous4 = document.getElementById('previous4')
    const previous5 = document.getElementById('previous5')
    const previous6 = document.getElementById('previous6')
    const previous7 = document.getElementById('previous7')
    const previous8 = document.getElementById('previous8')
    const previous9 = document.getElementById('previous9')
    const previous10 = document.getElementById('previous10')
    const goToHome = document.getElementById('go-to-home')
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'
        document.getElementById('home').style.display = 'block'
    }, 10000)

    var counter = 0;

    // first test
    function test1() {
        const loss1 = document.querySelector('.loss1')
        loss1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct1 = document.querySelector('.correct1')
            correct1.className += ' correct'
            correct1.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct1.className = 'clear'
            }, 5000)
        }
        const loss2 = document.querySelector('.loss2')
        loss2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct1 = document.querySelector('.correct1')
            correct1.className += ' correct'
            correct1.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct1.className = 'clear'
            }, 5000)
        }
        const loss3 = document.querySelector('.loss3')
        loss3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct1 = document.querySelector('.correct1')
            correct1.className = ' correct'
            correct1.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct1.className = 'clear'
            }, 5000)
        }
        let check = correct1.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test1()

    // second test
    function test2() {
        const lossz1 = document.querySelector('.lossz1')
        lossz1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct2 = document.querySelector('.correct2')
            correct2.className += ' correct'
            correct2.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct2.className = 'clear'
            }, 5000)
        }

        const lossz2 = document.querySelector('.lossz2')
        lossz2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct2 = document.querySelector('.correct2')
            correct2.className += ' correct'
            correct2.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct2.className = 'clear'
            }, 5000)
        }
        const lossz3 = document.querySelector('.lossz3')
        lossz3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct2 = document.querySelector('.correct2')
            correct2.className += ' correct'
            correct2.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct2.className = 'clear'
            }, 5000)
        }
        let check = correct2.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test2()

    //third test
    function test3() {
        const lossx1 = document.querySelector('.lossx1')
        lossx1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct3 = document.querySelector('.correct3')
            correct3.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct3.className = 'clear'
            }, 5000)
        }

        const lossx2 = document.querySelector('.lossx2')
        lossx2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct3 = document.querySelector('.correct3')
            correct3.className += ' correct'
            correct3.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct3.className = 'clear'
            }, 5000)
        }

        const lossx3 = document.querySelector('.lossx3')
        lossx3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct3 = document.querySelector('.correct3')
            correct3.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct3.className = 'clear'
            }, 5000)
        }
        let check = correct3.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test3()

    // test4
    function test4() {
        const lossc1 = document.querySelector('.lossc1')
        lossc1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct4 = document.querySelector('.correct4')
            correct4.className += ' correct'
            correct4.style.trancsitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct4.className = 'clear'
            }, 5000)
        }

        const lossc2 = document.querySelector('.lossc2')
        lossc2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct4 = document.querySelector('.correct4')
            correct4.className += ' correct'
            correct4.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct4.className = 'clear'
            }, 5000)
        }
        const lossc3 = document.querySelector('.lossc3')
        lossc3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct4 = document.querySelector('.correct4')
            correct4.className += ' correct'
            correct4.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct4.className = 'clear'
            }, 5000)
        }
        let check = correct4.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test4()

    // test5
    function test5() {
        const lossv1 = document.querySelector('.lossv1')
        lossv1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct5 = document.querySelector('.correct5')
            correct5.className += ' correct'
            correct5.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct5.className = 'clear'
            }, 5000)
        }

        const lossv2 = document.querySelector('.lossv2')
        lossv2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct5 = document.querySelector('.correct5')
            correct5.className += ' correct'
            correct5.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct5.className = 'clear'
            }, 5000)
        }
        const lossv3 = document.querySelector('.lossv3')
        lossv3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct5 = document.querySelector('.correct5')
            correct5.className += ' correct'
            correct5.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct5.className = 'clear'
            }, 5000)
        }
        let check = correct5.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test5()

    // test6
    function test6() {
        const lossb1 = document.querySelector('.lossb1')
        lossb1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct6 = document.querySelector('.correct6')
            correct6.className += ' correct'
            correct6.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct6.className = 'clear'
            }, 5000)
        }

        const lossb2 = document.querySelector('.lossb2')
        lossb2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct6 = document.querySelector('.correct6')
            correct6.className += ' correct'
            correct6.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct6.className = 'clear'
            }, 5000)
        }
        const lossb3 = document.querySelector('.lossb3')
        lossb3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct6 = document.querySelector('.correct6')
            correct6.className += ' correct'
            correct6.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct6.className = 'clear'
            }, 5000)
        }
        let check = correct6.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test6()

    // test7
    function test7() {
        const lossn1 = document.querySelector('.lossn1')
        lossn1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct7 = document.querySelector('.correct7')
            correct7.className += ' correct'
            correct7.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct7.className = 'clear'
            }, 5000)
        }

        const lossn2 = document.querySelector('.lossn2')
        lossn2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct7 = document.querySelector('.correct7')
            correct7.className += ' correct'
            correct7.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct7.className = 'clear'
            }, 5000)
        }
        const lossn3 = document.querySelector('.lossn3')
        lossn3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct7 = document.querySelector('.correct7')
            correct7.className += ' correct'
            correct7.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct7.className = 'clear'
            }, 5000)
        }
        let check = correct7.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test7()

    // test8
    function test8() {
        const lossm1 = document.querySelector('.lossm1')
        lossm1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct8 = document.querySelector('.correct8')
            correct8.className += ' correct'
            correct8.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct8.className = 'clear'
            }, 5000)
        }

        const lossm2 = document.querySelector('.lossm2')
        lossm2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct8 = document.querySelector('.correct8')
            correct8.className += ' correct'
            correct8.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct8.className = 'clear'
            }, 5000)
        }
        const lossm3 = document.querySelector('.lossm3')
        lossm3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct8 = document.querySelector('.correct8')
            correct8.className += ' correct'
            correct8.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct8.className = 'clear'
            }, 5000)
        }
        let check = correct8.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test8()

    // test9
    function test9() {
        const lossa1 = document.querySelector('.lossa1')
        lossa1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct9 = document.querySelector('.correct9')
            correct9.className += ' correct'
            correct9.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct9.className = 'clear'
            }, 5000)
        }

        const lossa2 = document.querySelector('.lossa2')
        lossa2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct9 = document.querySelector('.correct9')
            correct9.className += ' correct'
            correct9.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct9.className = 'clear'
            }, 5000)
        }
        const lossa3 = document.querySelector('.lossa3')
        lossa3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct9 = document.querySelector('.correct9')
            correct9.className += ' correct'
            correct9.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct9.className = 'clear'
            }, 5000)
        }
        let check = correct9.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test9()

    // test10
    function test10() {
        const losss1 = document.querySelector('.losss1')
        losss1.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct10 = document.querySelector('.correct10')
            correct10.className += ' correct'
            correct10.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct10.className = 'clear'
            }, 5000)
        }

        const losss2 = document.querySelector('.losss2')
        losss2.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct10 = document.querySelector('.correct10')
            correct10.className += ' correct'
            correct10.style.transitionDuration = '1s'
            console.log(counter)
            setTimeout(() => {
                this.className = 'clear'
                correct10.className = 'clear'
            }, 5000)
        }
        const losss3 = document.querySelector('.losss3')
        losss3.onclick = function() {
            this.className += ' wrong'
            this.style.transitionDuration = '1s'
            const correct10 = document.querySelector('.correct10')
            correct10.className += ' correct'
            correct10.style.transitionDuration = '1s'
            setTimeout(() => {
                this.className = 'clear'
                correct10.className = 'clear'
            }, 5000)
        }
        let check = correct10.onclick = function() {
            this.className += ' correct'
            this.style.transitionDuration = '1s'
            counter++;
            setTimeout(() => {
                this.className = 'clear'
            }, 5000)
        }
    }
    test10()

    //star and quiz
    start.onclick = function() {
        document.getElementById('home').style.display = 'none';
        document.getElementById('section1').style.display = 'block';
    }
    backHome.onclick = function() {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('home').style.display = 'block';
    }

    //next and preious function
    next1.onclick = function() {
        document.getElementById('section1').style.display = 'none';
        document.getElementById('section2').style.display = 'block';
    }
    next2.onclick = function() {
        document.getElementById('section2').style.display = 'none';
        document.getElementById('section3').style.display = 'block';
    }
    next3.onclick = function() {
        document.getElementById('section3').style.display = 'none';
        document.getElementById('section4').style.display = 'block';
    }
    next4.onclick = function() {
        document.getElementById('section4').style.display = 'none';
        document.getElementById('section5').style.display = 'block';
    }
    next5.onclick = function() {
        document.getElementById('section5').style.display = 'none';
        document.getElementById('section6').style.display = 'block';
    }
    next6.onclick = function() {
        document.getElementById('section6').style.display = 'none';
        document.getElementById('section7').style.display = 'block';
    }
    next7.onclick = function() {
        document.getElementById('section7').style.display = 'none';
        document.getElementById('section8').style.display = 'block';
    }
    next8.onclick = function() {
        document.getElementById('section8').style.display = 'none';
        document.getElementById('section9').style.display = 'block';
    }
    next9.onclick = function() {
        document.getElementById('section9').style.display = 'none';
        document.getElementById('section10').style.display = 'block';
    }
    previous2.onclick = function() {
        document.getElementById('section2').style.display = 'none';;
        document.getElementById('section1').style.display = 'block';;
    }
    previous3.onclick = function() {
        document.getElementById('section3').style.display = 'none';
        document.getElementById('section2').style.display = 'block';;
    }
    previous4.onclick = function() {
        document.getElementById('section4').style.display = 'none';
        document.getElementById('section3').style.display = 'block';
    }
    previous5.onclick = function() {
        document.getElementById('section5').style.display = 'none';
        document.getElementById('section4').style.display = 'block';
    }
    previous6.onclick = function() {
        document.getElementById('section6').style.display = 'none';
        document.getElementById('section5').style.display = 'block';
    }
    previous7.onclick = function() {
        document.getElementById('section7').style.display = 'none';
        document.getElementById('section6').style.display = 'block';
    }
    previous8.onclick = function() {
        document.getElementById('section8').style.display = 'none';
        document.getElementById('section7').style.display = 'block';
    }
    previous9.onclick = function() {
        document.getElementById('section9').style.display = 'none';
        document.getElementById('section8').style.display = 'block';
    }
    previous10.onclick = function() {
        document.getElementById('section10').style.display = 'none';
        document.getElementById('section9').style.display = 'block';
    }
    submit.onclick = function() {
        document.getElementById('section10').style.display = 'none';
        document.getElementById('check-answer').style.display = 'block';
        result.innerHTML = counter;
    }
    goToHome.onclick = function() {
        document.getElementById('check-answer').style.display = 'none';
        document.getElementById('home').style.display = 'block';
    }
})