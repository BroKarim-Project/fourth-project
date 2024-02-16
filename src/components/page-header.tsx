import React from 'react';
import classNames from 'classname';

function PageHeader({ className, children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <section className={classNames(' container mx-auto overflow-hidden sm:py-10', 'xl:min-w-full', className)} {...props}>
      {children}
    </section>
  );
}

export { PageHeader };

/*
Mengapa ada ..props padahl sudh ada className?
- ClassName untuk menrima class atau style perubahan baru 
- sedangkan ...prosp menerima balue baru seperti id, time, ... jika dibutuhkan sehingga lebih fleksibel lagi
- tapi klo g ada niat ya hapus aja

*/
