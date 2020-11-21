(function() {
  var fn = function() {
    
    (function(root) {
      function now() {
        return new Date();
      }
    
      var force = false;
    
      if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
        root._bokeh_onload_callbacks = [];
        root._bokeh_is_loading = undefined;
      }
    
      
      
    
      var element = document.getElementById("1351b204-a47f-41d8-bf3a-2ce2b9f9536d");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid '1351b204-a47f-41d8-bf3a-2ce2b9f9536d' but no matching script tag was found.")
        }
      
    
      function run_callbacks() {
        try {
          root._bokeh_onload_callbacks.forEach(function(callback) {
            if (callback != null)
              callback();
          });
        } finally {
          delete root._bokeh_onload_callbacks
        }
        console.debug("Bokeh: all callbacks have finished");
      }
    
      function load_libs(css_urls, js_urls, callback) {
        if (css_urls == null) css_urls = [];
        if (js_urls == null) js_urls = [];
    
        root._bokeh_onload_callbacks.push(callback);
        if (root._bokeh_is_loading > 0) {
          console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        root._bokeh_is_loading = css_urls.length + js_urls.length;
    
        function on_load() {
          root._bokeh_is_loading--;
          if (root._bokeh_is_loading === 0) {
            console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
            run_callbacks()
          }
        }
    
        function on_error() {
          console.error("failed to load " + url);
        }
    
        for (var i = 0; i < css_urls.length; i++) {
          var url = css_urls[i];
          const element = document.createElement("link");
          element.onload = on_load;
          element.onerror = on_error;
          element.rel = "stylesheet";
          element.type = "text/css";
          element.href = url;
          console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
          document.body.appendChild(element);
        }
    
        const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js": "T2yuo9Oe71Cz/I4X9Ac5+gpEa5a8PpJCDlqKYO0CfAuEszu1JrXLl8YugMqYe3sM", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js": "98GDGJ0kOMCUMUePhksaQ/GYgB3+NH9h996V88sh3aOiUNX3N+fLXAtry6xctSZ6", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js": "89bArO+nlbP3sgakeHjCo1JYxYR5wufVgA3IbUvDY+K7w4zyxJqssu7wVnfeKCq8"};
    
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var element = document.createElement('script');
          element.onload = on_load;
          element.onerror = on_error;
          element.async = false;
          element.src = url;
          if (url in hashes) {
            element.crossOrigin = "anonymous";
            element.integrity = "sha384-" + hashes[url];
          }
          console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
          document.head.appendChild(element);
        }
      };
    
      function inject_raw_css(css) {
        const element = document.createElement("style");
        element.appendChild(document.createTextNode(css));
        document.body.appendChild(element);
      }
    
      
      var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.2.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.2.3.min.js"];
      var css_urls = [];
      
    
      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },
        
        function(Bokeh) {
          (function() {
            var fn = function() {
              Bokeh.safely(function() {
                (function(root) {
                  function embed_document(root) {
                    
                  var docs_json = '{"c852eb08-9139-43dc-8b6b-e8030663bbf3":{"roots":{"references":[{"attributes":{"active_drag":"auto","active_inspect":"auto","active_multi":null,"active_scroll":"auto","active_tap":"auto","tools":[{"id":"1018"},{"id":"1019"},{"id":"1020"},{"id":"1021"},{"id":"1022"},{"id":"1023"}]},"id":"1025","type":"Toolbar"},{"attributes":{},"id":"1008","type":"LinearScale"},{"attributes":{},"id":"1023","type":"HelpTool"},{"attributes":{},"id":"1002","type":"DataRange1d"},{"attributes":{},"id":"1011","type":"BasicTicker"},{"attributes":{},"id":"1040","type":"BasicTickFormatter"},{"attributes":{"formatter":{"id":"1042"},"ticker":{"id":"1015"}},"id":"1014","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1034","type":"Circle"},{"attributes":{},"id":"1044","type":"UnionRenderers"},{"attributes":{},"id":"1006","type":"LinearScale"},{"attributes":{},"id":"1018","type":"PanTool"},{"attributes":{"bottom_units":"screen","fill_alpha":0.5,"fill_color":"lightgrey","left_units":"screen","level":"overlay","line_alpha":1.0,"line_color":"black","line_dash":[4,4],"line_width":2,"right_units":"screen","top_units":"screen"},"id":"1024","type":"BoxAnnotation"},{"attributes":{"axis":{"id":"1014"},"dimension":1,"ticker":null},"id":"1017","type":"Grid"},{"attributes":{},"id":"1042","type":"BasicTickFormatter"},{"attributes":{"below":[{"id":"1010"}],"center":[{"id":"1013"},{"id":"1017"}],"left":[{"id":"1014"}],"renderers":[{"id":"1035"}],"title":{"id":"1038"},"toolbar":{"id":"1025"},"x_range":{"id":"1002"},"x_scale":{"id":"1006"},"y_range":{"id":"1004"},"y_scale":{"id":"1008"}},"id":"1001","subtype":"Figure","type":"Plot"},{"attributes":{},"id":"1022","type":"ResetTool"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"x":{"field":"x"},"y":{"field":"y"}},"id":"1033","type":"Circle"},{"attributes":{"overlay":{"id":"1024"}},"id":"1020","type":"BoxZoomTool"},{"attributes":{"source":{"id":"1032"}},"id":"1036","type":"CDSView"},{"attributes":{"text":""},"id":"1038","type":"Title"},{"attributes":{"formatter":{"id":"1040"},"ticker":{"id":"1011"}},"id":"1010","type":"LinearAxis"},{"attributes":{},"id":"1019","type":"WheelZoomTool"},{"attributes":{},"id":"1045","type":"Selection"},{"attributes":{"data":{"x":[1,2],"y":[3,4]},"selected":{"id":"1045"},"selection_policy":{"id":"1044"}},"id":"1032","type":"ColumnDataSource"},{"attributes":{},"id":"1004","type":"DataRange1d"},{"attributes":{},"id":"1015","type":"BasicTicker"},{"attributes":{"data_source":{"id":"1032"},"glyph":{"id":"1033"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1034"},"selection_glyph":null,"view":{"id":"1036"}},"id":"1035","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1010"},"ticker":null},"id":"1013","type":"Grid"},{"attributes":{},"id":"1021","type":"SaveTool"}],"root_ids":["1001"]},"title":"Bokeh Application","version":"2.2.3"}}';
                  var render_items = [{"docid":"c852eb08-9139-43dc-8b6b-e8030663bbf3","root_ids":["1001"],"roots":{"1001":"1351b204-a47f-41d8-bf3a-2ce2b9f9536d"}}];
                  root.Bokeh.embed.embed_items(docs_json, render_items);
                
                  }
                  if (root.Bokeh !== undefined) {
                    embed_document(root);
                  } else {
                    var attempts = 0;
                    var timer = setInterval(function(root) {
                      if (root.Bokeh !== undefined) {
                        clearInterval(timer);
                        embed_document(root);
                      } else {
                        attempts++;
                        if (attempts > 100) {
                          clearInterval(timer);
                          console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                        }
                      }
                    }, 10, root)
                  }
                })(window);
              });
            };
            if (document.readyState != "loading") fn();
            else document.addEventListener("DOMContentLoaded", fn);
          })();
        },
        function(Bokeh) {
        
        
        }
      ];
    
      function run_inline_js() {
        
        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i].call(root, root.Bokeh);
        }
        
      }
    
      if (root._bokeh_is_loading === 0) {
        console.debug("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(css_urls, js_urls, function() {
          console.debug("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(window));
  };
  if (document.readyState != "loading") fn();
  else document.addEventListener("DOMContentLoaded", fn);
})();