/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
        //this.receivedEvent('deviceready');
        $(document).ready(function(){
            ready();
        });
    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function ready()
{
    var size = $(window).width()/18;
    $("html").css("font-size",size);
    var myscroll=new IScroll("#file-list");

    attachEvent("#file-list li",function(){
        $(this).remove();
    });
    /*$(".listening").hide();
    $(".received").show();
    var str="cordova:"+device.cordova+"<br/>"
            +"model:"+device.model+"<br/>"
            +"platform:"+device.platform+"<br/>"
            +"uuid:"+device.uuid+"<br/>"
            +"version:"+device.version+"<br/>"
            +"manufacturer:"+device.manufacturer+"<br/>"
            +"isVirtual:"+device.isVirtual+"<br/>"
            +"serial:"+device.serial+"<br/>";
    $(".received").html(str);
    navigator.camera.getPicture(cameraSuccess, cameraError, {quality:50});*/
}

function attachEvent(src, cb)
{
    $(src).unbind();
    var isTouchDevice="ontouchstart" in window||navigator.msMaxTouchPoints;
    if(isTouchDevice)
    {
        $(src).bind("touchstart",function(event){
            $(this).data("touchon",true);
            $(this).addClass("pressed");
        });
        $(src).bind("touchend",function(){
            if($(this).data("touchon"))
            {
                cb.bind(this)();
            }
            $(this).data("touchon",false);
        })
        $(src).bind("touchmove",function(event){
            $(this).data("touchon",false);
            $(this).removeClass("pressed");
        });
    }
    else
    {
        $(src).bind("mousedown",function(){
            $(this).addClass("pressed");
            $(this).data("touchon",true);
        });
        $(src).bind("mouseup",function(){
            $(this).removeClass("pressed");
            if($(this).data("touchon"))
            {
                cb.bind(this)();
            }
            $(this).data("touchon",false);
        });
    }
    
}

function cameraSuccess(imageData)
{
    var image = document.getElementById('myImage');
   image.src = "data:image/jpeg;base64," + imageData;
}

function cameraError()
{
    alert("cameraError");

}

app.initialize();