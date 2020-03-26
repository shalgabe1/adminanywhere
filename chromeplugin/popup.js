// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';


clearSpool.onclick = function(element) {
 // Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  
  };
xhttp.open("POST", "http://laptop-8fofeigj:5000/", true);
  xhttp.send();

document.getElementById("main").innerHTML = "<h1>Spool Cleared</h1>"
};
