import { ShopeHeader } from '../components/shopeHeader';
import { ShopeCenter } from '../components/shopeCenter';
import '../pages/css/shope.css';
import { Footer } from '../components/Footer';

export function Shope({state, callback}) {
    return (
        <>
            <ShopeHeader />
            <ShopeCenter state={state} callback={callback}/>
            <Footer />
        </>
    )
}