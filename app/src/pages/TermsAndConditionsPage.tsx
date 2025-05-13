import Footer from '../components/Footer';
import Header from '../components/terms/Header';
import HeroSection from '../components/terms/HeroSection';
import TableOfContents from '../components/terms/TableOfContents';
import TermsContent from '../components/terms/TermsContent';

const TermsAndConditionsPage = () => {




    return (
        <div className="flex flex-col">
            <Header />
            <HeroSection />

            <main className="flex-grow container mx-auto px-4 lg:px-8 mb-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-3 order-2 lg:order-1">
                        <div className="lg:sticky lg:top-4 hidden lg:block">
                            <TableOfContents />
                        </div>
                    </div>

                    <div className="lg:col-span-9 order-1 lg:order-2">
                        <div className="prose">
                            <TermsContent />
                        </div>
                    </div>
                </div>
            </main>

            <Footer />


        </div>
    );
};

export default TermsAndConditionsPage;