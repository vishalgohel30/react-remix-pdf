// "use client";
import { useEffect, useRef, useState } from 'react';
import PSPDFKit from 'pspdfkit';

function Index({document}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

	// useEffect(() => {
	// 		const container = containerRef.current;

	// 	if(document){
	// 		let instance, PSPDFKit;
	// 		(async function () {
	// 			PSPDFKit = (await import('pspdfkit')).default;
	// 			instance = await PSPDFKit.load({
	// 				container,
	// 				document,
	// 				baseUrl: `${window.location.protocol}//${window.location.host}/`,
	// 				// licenseKey: 'YOUR_LICENSE_KEY_GOES_HERE',
	// 			});
	// 		})();
    //         // PSPDFKit && PSPDFKit.unload(container);
    //         // setTimeout(()=>{
    //         //     console.log('calll')
    //         //     PSPDFKit && PSPDFKit.unload(container);
    //         // },6000)
	// 		return () => PSPDFKit && PSPDFKit.unload(container);
		
	// 	}

      
	// }, [document]);

    useEffect(() => {
		if(document){
			const container = containerRef.current;
			let instance, PSPDFKit;
			(async function () {
				PSPDFKit = (await import('pspdfkit')).default;
				instance = await PSPDFKit.load({
					container,
					document,
					baseUrl: `${window.location.protocol}//${window.location.host}/`,
					// licenseKey: 'YOUR_LICENSE_KEY_GOES_HERE',
				});
			})();
			return () => PSPDFKit && PSPDFKit.unload(container);
		
		}
	}, [document]);

  return (<div ref={containerRef} style={{ height: '100vh' }} />);
}

const PdfList = [
	{name:'pdf1', document:"https://pdftron.s3.amazonaws.com/downloads/pl/webviewer-demo.pdf"},
	{name:'pdf2', document:"https://www.africau.edu/images/default/sample.pdf"},
	{name:'pdf3', document:"https://www.clickdimensions.com/links/TestPDFfile.pdf"},
	{name:'pdf4', document:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"},
	{name:'pdf5', document:"https://s29.q4cdn.com/175625835/files/doc_downloads/test.pdf"},
]

const PdfView = () =>{
	const [document, setDocument] = useState("");

	return (<>
	<div>{PdfList.map(({name, document})=><div key={name} onMouseDown={()=>setDocument('')} onClick={()=>{
        
        setTimeout(()=>{
            setDocument(document)
        },1000)
        }}>{name}</div>)}</div>
	{document && <Index  document={document}/>}
	</>)
}
export default PdfView