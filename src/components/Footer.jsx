export default function Footer({ className }) {
  return (
    <div className={`${className} bg-vc-border-gradient inset-x-0 bottom-3 mx-3 rounded-lg p-px shadow-lg `}>
      <div className="flex flex-col justify-between  rounded-lg bg-[#ffc6e7] opacity-30 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:opacity-100 px-2 py-1">
        <div className="flex items-center text-black flex-row gap-x-2">
          <a href="https://vercel.com" title="Vercel">
            <div>By Karim</div>
          </a>
          {' : '}
          <a className="underline decoration-dotted underline-offset-4 transition-colors hover:text-[#ffe859]" href="https://github.com/BroKarim/BroKarim-Project/tree/main/third-project" target="_blank" rel="noreferrer">
            Source code
          </a>
        </div>
      </div>
    </div>
  );
}
