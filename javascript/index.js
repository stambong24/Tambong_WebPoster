$("#maria-page").hide()
$("#isabel-page").hide()
$("#daniel-page").hide();
$("#shima-page").hide();
$("#info-one").hide();
$("#info-two").hide();
$("#info-three").hide();
$("#main-page").hide();


$("#ocad").delay(700).fadeOut(400);

$("#main-page").delay(1000).fadeIn(700);

/*---INFO----*/

$("#one").mouseover(function(){
    $("#one").css({"scale": "110%"});
    $("#one").css({"cursor": "pointer"});
})
$("#one").mouseleave(function(){
    $("#one").css({"scale": "100%"});
})

$("#one").click(function(){
    $("#one").css({"opacity": "100%"});
    $("#two").css({"opacity": "40%"});
    $("#three").css({"opacity": "40%"});
    $("#info-one").show();
    $("#info-two").hide();
    $("#info-three").hide();
})

$("#two").mouseover(function(){
    $("#two").css({"scale": "110%"});
    $("#two").css({"cursor": "pointer"});
})
$("#two").mouseleave(function(){
    $("#two").css({"scale": "100%"});
})

$("#two").click(function(){
    $("#two").css({"opacity": "100%"});
    $("#one").css({"opacity": "40%"});
    $("#three").css({"opacity": "40%"});
    $("#info-two").show();
    $("#info-one").hide();
    $("#info-three").hide();
})

$("#three").mouseover(function(){
    $("#three").css({"scale": "110%"});
    $("#three").css({"cursor": "pointer"});
})
$("#three").mouseleave(function(){
    $("#three").css({"scale": "100%"});
})

$("#three").click(function(){
    $("#three").css({"opacity": "100%"});
    $("#two").css({"opacity": "40%"});
    $("#one").css({"opacity": "40%"});
    $("#info-three").show();
    $("#info-one").hide();
    $("#info-two").hide();
})





/*------------MARIA---------*/

$("#maria-header-main").mouseover(function(){
    $("#maria-header-main").css({"color": "#2600E5"});
    $("#maria-header-main").css({"scale": "110%"});
    $("#maria-header-main").css({"cursor": "pointer"});
    $("#maria-header-main").css({"animation-play-state": "paused"});
})
$("#maria-header-main").mouseleave(function(){
    $("#maria-header-main").css({"color": "black"});
    $("#maria-header-main").css({"scale": "100%"});
    $("#maria-header-main").css({"animation-play-state": "running"});
})

$("#maria-header-main").click(function(){
    $("#main-page").hide();
    $("#maria-page").show();
    $("#maria-menu").css({"color": "#2600E5"})

    $("#maria-menu").mouseover(function(){
        $("#maria-menu").css({"color": "#2600E5"});
        $("#maria-menu").css({"cursor": "pointer"});
        $("#maria-menu").css({"letter-spacing": "1px"});
    })
    $("#maria-menu").mouseleave(function(){
        $("#maria-menu").css({"color": "2600E5"});
        $("#maria-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").mouseover(function(){
        $("#daniel-menu").css({"color": "#D60505"});
        $("#daniel-menu").css({"cursor": "pointer"});
        $("#daniel-menu").css({"letter-spacing": "1px"});
    })
    $("#daniel-menu").mouseleave(function(){
        $("#daniel-menu").css({"color": "black"});
        $("#daniel-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").click(function(){
        $("#maria-page").hide();
        $("#daniel-page").show();
    })

    $("#shima-menu").mouseover(function(){
        $("#shima-menu").css({"color": "#D605C1"});
        $("#shima-menu").css({"cursor": "pointer"});
        $("#shima-menu").css({"letter-spacing": "1px"});
    })
    $("#shima-menu").mouseleave(function(){
        $("#shima-menu").css({"color": "black"});
        $("#shima-menu").css({"letter-spacing": "0px"});
    })

    $("#shima-menu").click(function(){
        $("#maria-page").hide();
        $("#shima-page").show();
    })

    $("#isabel-menu").mouseover(function(){
        $("#isabel-menu").css({"color": "#A006D8"});
        $("#isabel-menu").css({"cursor": "pointer"});
        $("#isabel-menu").css({"letter-spacing": "1px"});
    })
    $("#isabel-menu").mouseleave(function(){
        $("#isabel-menu").css({"color": "black"});
        $("#isabel-menu").css({"letter-spacing": "0px"});
    })

    $("#isabel-menu").click(function(){
        $("#maria-page").hide();
        $("#isabel-page").show();
    })

    $("#back-menu").mouseover(function(){
        $("#back-menu").css({"cursor": "pointer"});
        $("#back-menu").css({"letter-spacing": "1px"});
    })
    $("#back-menu").mouseleave(function(){
        $("#back-menu").css({"letter-spacing": "0px"});
    })
    $("#back-menu").click(function(){
        $("#maria-page").hide();
        $("#main-page").show();

    })

})

/*--------ISABEL------------*/

$("#isabel-header-main").mouseover(function(){
    $("#isabel-header-main").css({"color": "#A006D8"});
    $("#isabel-header-main").css({"scale": "104%"});
    $("#isabel-header-main").css({"cursor": "pointer"});
    $("#isabel-header-main").css({"animation-play-state": "paused"});
})
$("#isabel-header-main").mouseleave(function(){
    $("#isabel-header-main").css({"color": "black"});
    $("#isabel-header-main").css({"scale": "100%"});
    $("#isabel-header-main").css({"animation-play-state": "running"});
})

$("#isabel-header-main").click(function(){
    $("#main-page").hide();
    $("#isabel-page").show();
})

$("#maria-menu-2").mouseover(function(){
    $("#maria-menu-2").css({"color": "#2600E5"});
    $("#maria-menu-2").css({"cursor": "pointer"});
    $("#maria-menu-2").css({"letter-spacing": "1px"});
})
$("#maria-menu-2").mouseleave(function(){
    $("#maria-menu-2").css({"color": "black"});
    $("#maria-menu-2").css({"letter-spacing": "0px"});
})

$("#maria-menu-2").click(function(){
    $("#isabel-page").hide();
    $("#maria-page").show();

    $("#maria-menu").mouseover(function(){
        $("#maria-menu").css({"color": "#2600E5"});
        $("#maria-menu").css({"cursor": "pointer"});
        $("#maria-menu").css({"letter-spacing": "1px"});
    })
    $("#maria-menu").mouseleave(function(){
        $("#maria-menu").css({"color": "2600E5"});
        $("#maria-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").mouseover(function(){
        $("#daniel-menu").css({"color": "#D60505"});
        $("#daniel-menu").css({"cursor": "pointer"});
        $("#daniel-menu").css({"letter-spacing": "1px"});
    })
    $("#daniel-menu").mouseleave(function(){
        $("#daniel-menu").css({"color": "black"});
        $("#daniel-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").click(function(){
        $("#maria-page").hide();
        $("#daniel-page").show();
    })

    $("#shima-menu").mouseover(function(){
        $("#shima-menu").css({"color": "#D605C1"});
        $("#shima-menu").css({"cursor": "pointer"});
        $("#shima-menu").css({"letter-spacing": "1px"});
    })
    $("#shima-menu").mouseleave(function(){
        $("#shima-menu").css({"color": "black"});
        $("#shima-menu").css({"letter-spacing": "0px"});
    })

    $("#shima-menu").click(function(){
        $("#maria-page").hide();
        $("#shima-page").show();
    })

    $("#isabel-menu").mouseover(function(){
        $("#isabel-menu").css({"color": "#A006D8"});
        $("#isabel-menu").css({"cursor": "pointer"});
        $("#isabel-menu").css({"letter-spacing": "1px"});
    })
    $("#isabel-menu").mouseleave(function(){
        $("#isabel-menu").css({"color": "black"});
        $("#isabel-menu").css({"letter-spacing": "0px"});
    })

    $("#isabel-menu").click(function(){
        $("#maria-page").hide();
        $("#isabel-page").show();
    })

    $("#back-menu").mouseover(function(){
        $("#back-menu").css({"cursor": "pointer"});
        $("#back-menu").css({"letter-spacing": "1px"});
    })
    $("#back-menu").mouseleave(function(){
        $("#back-menu").css({"letter-spacing": "0px"});
    })
    $("#back-menu").click(function(){
        $("#maria-page").hide();
        $("#main-page").show();

    })
})

$("#daniel-menu-2").mouseover(function(){
    $("#daniel-menu-2").css({"color": "#D60505"});
    $("#daniel-menu-2").css({"cursor": "pointer"});
    $("#daniel-menu-2").css({"letter-spacing": "1px"});
})
$("#daniel-menu-2").mouseleave(function(){
    $("#daniel-menu-2").css({"color": "black"});
    $("#daniel-menu-2").css({"letter-spacing": "0px"});
})

$("#daniel-menu-2").click(function(){
    $("#isabel-page").hide();
    $("#daniel-page").show();
})

$("#shima-menu-2").mouseover(function(){
    $("#shima-menu-2").css({"color": "#D605C1"});
    $("#shima-menu-2").css({"cursor": "pointer"});
    $("#shima-menu-2").css({"letter-spacing": "1px"});
})
$("#shima-menu-2").mouseleave(function(){
    $("#shima-menu-2").css({"color": "black"});
    $("#shima-menu-2").css({"letter-spacing": "0px"});
})

$("#shima-menu-2").click(function(){
    $("#isabel-page").hide();
    $("#shima-page").show();
})

$("#isabel-menu-2").mouseover(function(){
    $("#isabel-menu-2").css({"color": "#A006D8"});
    $("#isabel-menu-2").css({"cursor": "pointer"});
    $("#isabel-menu-2").css({"letter-spacing": "1px"});
})
$("#isabel-menu-2").mouseleave(function(){
    $("#isabel-menu-2").css({"color": "#A006D8"});
    $("#isabel-menu-2").css({"letter-spacing": "0px"});
})

$("#back-menu-2").mouseover(function(){
    $("#back-menu-2").css({"cursor": "pointer"});
    $("#back-menu-2").css({"letter-spacing": "1px"});
})
$("#back-menu-2").mouseleave(function(){
    $("#back-menu-2").css({"letter-spacing": "0px"});
})

$("#back-menu-2").click(function(){
    $("#isabel-page").hide();
    $("#main-page").show();

})

/*----DANIEL---------*/

$("#daniel-header-main").mouseover(function(){
    $("#daniel-header-main-1").css({"color": "D60505"});
    $("#daniel-header-main-2").css({"color": "D60505"});
    $("#daniel-header-main-1").css({"scale": "110%"});
    $("#daniel-header-main-2").css({"scale": "110%"});
    $("#daniel-header-main").css({"cursor": "pointer"});
    $("#daniel-header-main-1").css({"animation-play-state": "paused"});
    $("#daniel-header-main-2").css({"animation-play-state": "paused"});
})
$("#daniel-header-main").mouseleave(function(){
    $("#daniel-header-main-1").css({"color": "black"});
    $("#daniel-header-main-2").css({"color": "black"});
    $("#daniel-header-main-1").css({"scale": "100%"});
    $("#daniel-header-main-2").css({"scale": "100%"});
    $("#daniel-header-main-1").css({"animation-play-state": "running"});
    $("#daniel-header-main-2").css({"animation-play-state": "running"});
})


$("#daniel-header-main").click(function(){
    $("#main-page").hide();
    $("#daniel-page").show();
    $("#daniel-menu-3").css({"color": "#D60505"})
})

$("#daniel-menu-3").mouseover(function(){
    $("#daniel-menu-3").css({"color": "#D60505"});
    $("#daniel-menu-3").css({"cursor": "pointer"});
    $("#daniel-menu-3").css({"letter-spacing": "1px"});
})
$("#daniel-menu-3").mouseleave(function(){
    $("#daniel-menu-3").css({"color": "#D60505"});
    $("#daniel-menu-3").css({"letter-spacing": "0px"});
})

$("#maria-menu-3").mouseover(function(){
    $("#maria-menu-3").css({"color": "#2600E5"});
    $("#maria-menu-3").css({"cursor": "pointer"});
    $("#maria-menu-3").css({"letter-spacing": "1px"});
})
$("#maria-menu-3").mouseleave(function(){
    $("#maria-menu-3").css({"color": "black"});
    $("#maria-menu-3").css({"letter-spacing": "0px"});
})

$("#maria-menu-3").click(function(){
    $("#daniel-page").hide();
    $("#maria-page").show();

    $("#maria-menu").mouseover(function(){
        $("#maria-menu").css({"color": "#2600E5"});
        $("#maria-menu").css({"cursor": "pointer"});
        $("#maria-menu").css({"letter-spacing": "1px"});
    })
    $("#maria-menu").mouseleave(function(){
        $("#maria-menu").css({"color": "2600E5"});
        $("#maria-menu").css({"letter-spacing": "0px"});
    })

 
    $("#daniel-menu").mouseover(function(){
        $("#daniel-menu").css({"color": "#D60505"});
        $("#daniel-menu").css({"cursor": "pointer"});
        $("#daniel-menu").css({"letter-spacing": "1px"});
    })
    $("#daniel-menu").mouseleave(function(){
        $("#daniel-menu").css({"color": "black"});
        $("#daniel-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").click(function(){
        $("#maria-page").hide();
        $("#daniel-page").show();
    })

    $("#shima-menu").mouseover(function(){
        $("#shima-menu").css({"color": "#D605C1"});
        $("#shima-menu").css({"cursor": "pointer"});
        $("#shima-menu").css({"letter-spacing": "1px"});
    })
    $("#shima-menu").mouseleave(function(){
        $("#shima-menu").css({"color": "black"});
        $("#shima-menu").css({"letter-spacing": "0px"});
    })

    $("#shima-menu").click(function(){
        $("#maria-page").hide();
        $("#shima-page").show();
    })

    $("#isabel-menu").mouseover(function(){
        $("#isabel-menu").css({"color": "#A006D8"});
        $("#isabel-menu").css({"cursor": "pointer"});
        $("#isabel-menu").css({"letter-spacing": "1px"});
    })
    $("#isabel-menu").mouseleave(function(){
        $("#isabel-menu").css({"color": "black"});
        $("#isabel-menu").css({"letter-spacing": "0px"});
    })

    $("#isabel-menu").click(function(){
        $("#maria-page").hide();
        $("#isabel-page").show();
    })

    $("#back-menu").mouseover(function(){
        $("#back-menu").css({"cursor": "pointer"});
        $("#back-menu").css({"letter-spacing": "1px"});
    })
    $("#back-menu").mouseleave(function(){
        $("#back-menu").css({"letter-spacing": "0px"});
    })
    $("#back-menu").click(function(){
        $("#maria-page").hide();
        $("#main-page").show();

    })
})

$("#shima-menu-3").mouseover(function(){
    $("#shima-menu-3").css({"color": "#D605C1"});
    $("#shima-menu-3").css({"cursor": "pointer"});
    $("#shima-menu-3").css({"letter-spacing": "1px"});
})
$("#shima-menu-3").mouseleave(function(){
    $("#shima-menu-3").css({"color": "black"});
    $("#shima-menu-3").css({"letter-spacing": "0px"});
})

$("#shima-menu-3").click(function(){
    $("#daniel-page").hide();
    $("#shima-page").show();
})

$("#isabel-menu-3").mouseover(function(){
    $("#isabel-menu-3").css({"color": "#A006D8"});
    $("#isabel-menu-3").css({"cursor": "pointer"});
    $("#isabel-menu-3").css({"letter-spacing": "1px"});
})
$("#isabel-menu-3").mouseleave(function(){
    $("#isabel-menu-3").css({"color": "black"});
    $("#isabel-menu-3").css({"letter-spacing": "0px"});
})

$("#isabel-menu-3").click(function(){
    $("#daniel-page").hide();
    $("#isabel-page").show();

    $("#maria-menu-2").mouseover(function(){
        $("#maria-menu-2").css({"color": "#2600E5"});
        $("#maria-menu-2").css({"cursor": "pointer"});
        $("#maria-menu-2").css({"letter-spacing": "1px"});
    })
    $("#maria-menu-2").mouseleave(function(){
        $("#maria-menu-2").css({"color": "black"});
        $("#maria-menu-2").css({"letter-spacing": "0px"});
    })
    
    $("#maria-menu-2").click(function(){
        $("#isabel-page").hide();
        $("#maria-page").show();
    
        $("#maria-menu").mouseover(function(){
            $("#maria-menu").css({"color": "#2600E5"});
            $("#maria-menu").css({"cursor": "pointer"});
            $("#maria-menu").css({"letter-spacing": "1px"});
        })
        $("#maria-menu").mouseleave(function(){
            $("#maria-menu").css({"color": "2600E5"});
            $("#maria-menu").css({"letter-spacing": "0px"});
        })
    
        $("#daniel-menu").mouseover(function(){
            $("#daniel-menu").css({"color": "#D60505"});
            $("#daniel-menu").css({"cursor": "pointer"});
            $("#daniel-menu").css({"letter-spacing": "1px"});
        })
        $("#daniel-menu").mouseleave(function(){
            $("#daniel-menu").css({"color": "black"});
            $("#daniel-menu").css({"letter-spacing": "0px"});
        })
    
        $("#shima-menu").mouseover(function(){
            $("#shima-menu").css({"color": "#D605C1"});
            $("#shima-menu").css({"cursor": "pointer"});
            $("#shima-menu").css({"letter-spacing": "1px"});
        })
        $("#shima-menu").mouseleave(function(){
            $("#shima-menu").css({"color": "black"});
            $("#shima-menu").css({"letter-spacing": "0px"});
        })

        $("#shima-menu").click(function(){
            $("#maria-page").hide();
            $("#shima-page").show();
        })
    
        $("#isabel-menu").mouseover(function(){
            $("#isabel-menu").css({"color": "#A006D8"});
            $("#isabel-menu").css({"cursor": "pointer"});
            $("#isabel-menu").css({"letter-spacing": "1px"});
        })
        $("#isabel-menu").mouseleave(function(){
            $("#isabel-menu").css({"color": "black"});
            $("#isabel-menu").css({"letter-spacing": "0px"});
        })
    
        $("#isabel-menu").click(function(){
            $("#maria-page").hide();
            $("#isabel-page").show();
        })
    
        $("#back-menu").mouseover(function(){
            $("#back-menu").css({"cursor": "pointer"});
            $("#back-menu").css({"letter-spacing": "1px"});
        })
        $("#back-menu").mouseleave(function(){
            $("#back-menu").css({"letter-spacing": "0px"});
        })
        $("#back-menu").click(function(){
            $("#maria-page").hide();
            $("#main-page").show();
    
        })
    })
    
    $("#daniel-menu-2").mouseover(function(){
        $("#daniel-menu-2").css({"color": "#D60505"});
        $("#daniel-menu-2").css({"cursor": "pointer"});
        $("#daniel-menu-2").css({"letter-spacing": "1px"});
    })
    $("#daniel-menu-2").mouseleave(function(){
        $("#daniel-menu-2").css({"color": "black"});
        $("#daniel-menu-2").css({"letter-spacing": "0px"});
    })
    
    
    
    $("#shima-menu-2").mouseover(function(){
        $("#shima-menu-2").css({"color": "#D605C1"});
        $("#shima-menu-2").css({"cursor": "pointer"});
        $("#shima-menu-2").css({"letter-spacing": "1px"});
    })
    $("#shima-menu-2").mouseleave(function(){
        $("#shima-menu-2").css({"color": "black"});
        $("#shima-menu-2").css({"letter-spacing": "0px"});
    })
    
    $("#isabel-menu-2").mouseover(function(){
        $("#isabel-menu-2").css({"color": "#A006D8"});
        $("#isabel-menu-2").css({"cursor": "pointer"});
        $("#isabel-menu-2").css({"letter-spacing": "1px"});
    })
    $("#isabel-menu-2").mouseleave(function(){
        $("#isabel-menu-2").css({"color": "#A006D8"});
        $("#isabel-menu-2").css({"letter-spacing": "0px"});
    })
    
    $("#back-menu-2").mouseover(function(){
        $("#back-menu-2").css({"cursor": "pointer"});
        $("#back-menu-2").css({"letter-spacing": "1px"});
    })
    $("#back-menu-2").mouseleave(function(){
        $("#back-menu-2").css({"letter-spacing": "0px"});
    })
    
    $("#back-menu-2").click(function(){
        $("#isabel-page").hide();
        $("#main-page").show();
    
    })

})

$("#back-menu-3").mouseover(function(){
    $("#back-menu-3").css({"cursor": "pointer"});
    $("#back-menu-3").css({"letter-spacing": "1px"});
})
$("#back-menu-3").mouseleave(function(){
    $("#back-menu-3").css({"letter-spacing": "0px"});
})

$("#back-menu-3").click(function(){
    $("#daniel-page").hide();
    $("#main-page").show();

})


/*--------SHIMA------------*/

$("#shima-header-main").mouseover(function(){
    $("#shima-header-main").css({"color": "#D605C1"});
    $("#shima-header-main").css({"scale": "110%"});
    $("#shima-header-main").css({"cursor": "pointer"});
    $("#shima-header-main").css({"animation-play-state": "paused"});
})
$("#shima-header-main").mouseleave(function(){
    $("#shima-header-main").css({"color": "black"});
    $("#shima-header-main").css({"scale": "100%"});
    $("#shima-header-main").css({"animation-play-state": "running"});
})

$("#shima-header-main").click(function(){
    $("#main-page").hide();
    $("#shima-page").show();
    $("#shima-menu-4").css({"color": "#D605C1"});
    
})

$("#maria-menu-4").mouseover(function(){
    $("#maria-menu-4").css({"color": "#2600E5"});
    $("#maria-menu-4").css({"cursor": "pointer"});
    $("#maria-menu-4").css({"letter-spacing": "1px"});
})
$("#maria-menu-4").mouseleave(function(){
    $("#maria-menu-4").css({"color": "black"});
    $("#maria-menu-4").css({"letter-spacing": "0px"});
})

$("#maria-menu-4").click(function(){
    $("#shima-page").hide();
    $("#maria-page").show();

    $("#maria-menu").mouseover(function(){
        $("#maria-menu").css({"color": "#2600E5"});
        $("#maria-menu").css({"cursor": "pointer"});
        $("#maria-menu").css({"letter-spacing": "1px"});
    })
    $("#maria-menu").mouseleave(function(){
        $("#maria-menu").css({"color": "2600E5"});
        $("#maria-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").mouseover(function(){
        $("#daniel-menu").css({"color": "#D60505"});
        $("#daniel-menu").css({"cursor": "pointer"});
        $("#daniel-menu").css({"letter-spacing": "1px"});
    })
    $("#daniel-menu").mouseleave(function(){
        $("#daniel-menu").css({"color": "black"});
        $("#daniel-menu").css({"letter-spacing": "0px"});
    })

    $("#daniel-menu").click(function(){
        $("#maria-page").hide();
        $("#daniel-page").show();
    })

    $("#shima-menu").mouseover(function(){
        $("#shima-menu").css({"color": "#D605C1"});
        $("#shima-menu").css({"cursor": "pointer"});
        $("#shima-menu").css({"letter-spacing": "1px"});
    })
    $("#shima-menu").mouseleave(function(){
        $("#shima-menu").css({"color": "black"});
        $("#shima-menu").css({"letter-spacing": "0px"});
    })

    $("#isabel-menu").mouseover(function(){
        $("#isabel-menu").css({"color": "#A006D8"});
        $("#isabel-menu").css({"cursor": "pointer"});
        $("#isabel-menu").css({"letter-spacing": "1px"});
    })
    $("#isabel-menu").mouseleave(function(){
        $("#isabel-menu").css({"color": "black"});
        $("#isabel-menu").css({"letter-spacing": "0px"});
    })

    $("#isabel-menu").click(function(){
        $("#maria-page").hide();
        $("#isabel-page").show();
    })

    $("#back-menu").mouseover(function(){
        $("#back-menu").css({"cursor": "pointer"});
        $("#back-menu").css({"letter-spacing": "1px"});
    })
    $("#back-menu").mouseleave(function(){
        $("#back-menu").css({"letter-spacing": "0px"});
    })
    $("#back-menu").click(function(){
        $("#maria-page").hide();
        $("#main-page").show();

    })
})

$("#daniel-menu-4").mouseover(function(){
    $("#daniel-menu-4").css({"color": "#D60505"});
    $("#daniel-menu-4").css({"cursor": "pointer"});
    $("#daniel-menu-4").css({"letter-spacing": "1px"});
})
$("#daniel-menu-4").mouseleave(function(){
    $("#daniel-menu-4").css({"color": "black"});
    $("#daniel-menu-4").css({"letter-spacing": "0px"});
})

$("#daniel-menu-4").click(function(){
    $("#shima-page").hide();
    $("#daniel-page").show();
})

$("#shima-menu-4").mouseover(function(){
    $("#shima-menu-4").css({"color": "#D605C1"});
    $("#shima-menu-4").css({"cursor": "pointer"});
    $("#shima-menu-4").css({"letter-spacing": "1px"});
})
$("#shima-menu-4").mouseleave(function(){
    $("#shima-menu-4").css({"color": "#D605C1"});
    $("#shima-menu-4").css({"letter-spacing": "0px"});
})

$("#isabel-menu-4").mouseover(function(){
    $("#isabel-menu-4").css({"color": "#A006D8"});
    $("#isabel-menu-4").css({"cursor": "pointer"});
    $("#isabel-menu-4").css({"letter-spacing": "1px"});
})
$("#isabel-menu-4").mouseleave(function(){
    $("#isabel-menu-4").css({"color": "black"});
    $("#isabel-menu-4").css({"letter-spacing": "0px"});
})

$("#isabel-menu-4").click(function(){
    $("#shima-page").hide();
    $("#isabel-page").show();
})

$("#back-menu-4").mouseover(function(){
    $("#back-menu-4").css({"cursor": "pointer"});
    $("#back-menu-4").css({"letter-spacing": "1px"});
})
$("#back-menu-4").mouseleave(function(){
    $("#back-menu-4").css({"letter-spacing": "0px"});
})

$("#back-menu-4").click(function(){
    $("#shima-page").hide();
    $("#main-page").show();

})



