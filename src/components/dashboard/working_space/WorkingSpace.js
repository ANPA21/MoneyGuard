import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { WorkingSpaceStyled } from './WorkingSpace.styled';

export const WorkingSpace = () => {
    return (
        <WorkingSpaceStyled>
            <Suspense fallback={<div>Loading...</div>}>
                <Outlet />
            </Suspense>
        </WorkingSpaceStyled>
    );
}