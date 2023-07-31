import React from 'react';
import Banner from '../Banner';
import PopularClasses from '../PopularClasses';
import PopularInstructor from '../PopularInstructor';
import ExtraSection from '../ExtraSection';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructor></PopularInstructor>
            <ExtraSection></ExtraSection>

        </div>
    );
};

export default Home;