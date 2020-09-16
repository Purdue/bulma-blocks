jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent,
    insertBlock
} from '@wordpress/e2e-test-utils';

import {
    clickElementByText,
    blockStartup,
    clickCheckbox,
    updateRangeInput
} from '../test-helpers'

const block = {blockTitle: 'Bulma - Columns', blockName: 'bulma-blocks/columns'}

describe( `🔬 ${block.blockTitle} Block`, () => {
    beforeAll( async () => {
        await enablePageDialogAccept();
    } );
    beforeEach( async () => {
        await createNewPost();
    } );

    test( '🔎 Block should be available.', async () => {
        await insertBlock(block.blockTitle)

        // tests that the block is properly inserted and matches the existing snapshot
        expect(await page.$(`[data-type="${block.blockName}"]`)).not.toBeNull()
        expect( await getEditedPostContent() ).toMatchSnapshot()
    } )

    describe( '🔬 Adding/Removing Columns', () => {

        // test settings to do with adding and removing the inner navigation links
        test( '🔎 Add Columns.', async () => {
            await blockStartup(block)
    
            const addColumns = 3
            await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, addColumns)
    
            const columnsNum = await page.$$eval(`[data-type="bulma-blocks/column"]`, array => array.length)
    
            expect( columnsNum ).toEqual(addColumns)
            expect( await getEditedPostContent() ).toMatchSnapshot()
    
        })
    
        test( '🔎 Add then remove Columns.', async () => {
            await blockStartup(block)
    
            let update = 5
            await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, update)
            
            let columnsNum = await page.$$eval(`[data-type="bulma-blocks/column"]`, array => array.length)
            expect( columnsNum ).toEqual(update)
    
            update = 2
            await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, update)
    
    
            columnsNum = await page.$$eval(`[data-type="bulma-blocks/column"]`, array => array.length)
            expect( columnsNum ).toEqual(update)
    
            expect( await getEditedPostContent() ).toMatchSnapshot()
    
        })
    })
})