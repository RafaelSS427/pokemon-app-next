import dynamic from 'next/dynamic';
import { FC, PropsWithChildren } from 'react';

// not found in production
const NoSsr: FC<PropsWithChildren> = ({ children }) => <> { children } </>;
export default dynamic(async() => await NoSsr, { ssr: false });;