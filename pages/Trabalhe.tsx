import React, { useEffect } from 'react';
import { Monitor, Globe, CheckCircle } from 'lucide-react';

const Trabalhe: React.FC = () => {
  useEffect(() => {
    // Carregar o script do Zoho Forms
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
    (function() {
      try{
        var f = document.createElement("iframe");
        
        var ifrmSrc = 'https://forms.zohopublic.com/escritoriovitor1/form/Querfazerpartedotime/formperma/4J1iOYSqUYkxx_FkRFfHmHyToEC_YDVbIMfMmgN3Oh4?zf_rszfm=1';
        
        try{
          if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined"  ) {
            for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
              var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
              utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
              var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
              if ( typeof utmVal !== "undefined" ) {
                if ( utmVal != "" ) {
                  if(ifrmSrc.indexOf('?') > 0){
                    ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                  }else{
                    ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                  }
                }
              }
            }
          }
          if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
            for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
              var utmPm = ZFLead.utmPNameArr[ prmIdx ];
              var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
              if ( typeof utmVal !== "undefined" ) {
                if ( utmVal != "" ){
                  if(ifrmSrc.indexOf('?') > 0){
                    ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                  }else{
                    ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                  }
                }
              }
            }
          }
        }catch(e){}
        
        f.src = ifrmSrc;
        f.style.border="none";
        f.style.height="941px";
        f.style.width="100%";
        f.style.transition="all 0.5s ease";
        f.setAttribute("aria-label", 'Quer fazer parte do time?');
        
        var d = document.getElementById("zf_div_4J1iOYSqUYkxx_FkRFfHmHyToEC_YDVbIMfMmgN3Oh4");
        if(d) {
          d.appendChild(f);
        }
        
        window.addEventListener('message', function (event){
          var evntData = event.data;
          if( evntData && evntData.constructor == String ){
            var zf_ifrm_data = evntData.split("|");
            if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
              var zf_perma = zf_ifrm_data[0];
              var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
              var iframe = document.getElementById("zf_div_4J1iOYSqUYkxx_FkRFfHmHyToEC_YDVbIMfMmgN3Oh4").getElementsByTagName("iframe")[0];
              if ( iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                var prevIframeHeight = iframe.style.height;
                var zf_tout = false;
                if( zf_ifrm_data.length == 3 ) {
                  iframe.scrollIntoView();
                  zf_tout = true;
                }

                if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                  if( zf_tout ) {
                    setTimeout(function(){
                      iframe.style.height = zf_ifrm_ht_nw;
                    },500);
                  } else {
                    iframe.style.height = zf_ifrm_ht_nw;
                  }
                }
              }
            }
          }
        }, false);
      }catch(e){}
    })();
    `;
    
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
      // Clean up the container to prevent duplicate iframes
      const container = document.getElementById("zf_div_4J1iOYSqUYkxx_FkRFfHmHyToEC_YDVbIMfMmgN3Oh4");
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="bg-background-light min-h-screen">
      {/* Page Header */}
      <div className="bg-primary text-white py-16 text-center">
         <h1 className="text-4xl font-heading font-bold">Trabalhe Conosco</h1>
         <p className="text-gray-300 mt-2 text-lg">Junte-se à nossa equipe de especialistas</p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Left Column: Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold text-primary mb-2 font-heading">Quer fazer parte do time?</h2>
            <p className="text-text-light mb-8">Preencha o formulário abaixo com seus dados e anexe seu currículo. Um dos nossos especialistas entrará em contato em breve.</p>

            {/* Zoho Form Container */}
            <div id="zf_div_4J1iOYSqUYkxx_FkRFfHmHyToEC_YDVbIMfMmgN3Oh4"></div>
          </div>

          {/* Right Column: Info */}
          <div className="flex flex-col gap-6">
            {/* Office Info */}
            <div className="flex flex-col items-center justify-center bg-primary p-8 rounded-lg border border-primary-dark text-center flex-grow text-white">
              <div className="bg-white/10 p-8 rounded-full shadow-lg mb-8 ring-4 ring-secondary/50 backdrop-blur-sm">
                  <Monitor size={64} className="text-white" />
              </div>
              <h3 className="text-3xl font-heading font-bold text-white mb-6">Escritório 100% Digital</h3>
              <p className="text-xl text-gray-200 leading-relaxed max-w-md font-light">
                Atuamos de forma remota, atendendo clientes em todo o Brasil. Buscamos profissionais proativos, organizados e com facilidade em tecnologia.
              </p>
              <div className="mt-12 flex items-center gap-3 text-white bg-white/10 px-4 py-2 rounded-full shadow-sm border border-white/20">
                  <Globe size={20} />
                  <span className="text-sm font-medium uppercase tracking-wide">Atendimento Nacional</span>
              </div>
            </div>

            {/* Benefits / Culture */}
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
               <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                 <CheckCircle size={20} className="text-secondary" /> Por que trabalhar conosco?
               </h4>
               <ul className="space-y-3 text-sm text-text-light">
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                   Ambiente colaborativo e focado em resultados.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                   Oportunidade de aprendizado constante em Direito Previdenciário.
                 </li>
                 <li className="flex items-start gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5"></span>
                   Flexibilidade do trabalho remoto.
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trabalhe;