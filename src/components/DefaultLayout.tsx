import {Outlet} from "react-router-dom";
import { Grid, GridItem } from '@chakra-ui/react'
import DefaultFooter from "./DefaultFooter";
import DefaultHeader from "./DefaultHeader";
export default function DefaultLayout() {
    return(
        <div className="NavbarDefault">
            <Grid
                templateAreas={`"header"
                  "main"
                  "footer"`}
                gridTemplateRows={'50px 1fr 30px'}
                gridTemplateColumns={'1fr'}
                gap='1'
            >
                <GridItem area={'header'}>
                    <DefaultHeader />
                </GridItem>
                <GridItem area={'main'}>
                    <Outlet/>
                </GridItem>
                <GridItem area={'footer'}>
                    <DefaultFooter />
                </GridItem>
            </Grid>
        </div>
    );
}