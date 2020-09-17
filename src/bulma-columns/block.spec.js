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
    updateRangeInput, 
    selectOption
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

    describe( '🔬 Side Panel Settings', () => {
        describe( '🔬 Adding/Removing Columns', () => {
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
        
            test( '🔎 Entering number larger than max should produce max number of columns', async () => {
                await blockStartup(block)
        
                let update = 12
                await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, update)
                
                let columnsNum = await page.$$eval(`[data-type="bulma-blocks/column"]`, array => array.length)
                expect( columnsNum ).toEqual(6)
                expect( await getEditedPostContent() ).toMatchSnapshot()
        
            })
        })
        describe( '🔬 Checkbox Settings', () => {
            test( '🔎 Center Columns', async () => {
                await blockStartup(block)

                await clickCheckbox('Center Columns?')
                
                const editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"isCentered":true')).toBe(true)
                expect( editedContent ).toMatchSnapshot()
            })
            test( '🔎 Add Diviers Between Columns', async () => {
                await blockStartup(block)

                await clickCheckbox('Include dividers between columns?')
                
                const editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"dividers":true')).toBe(true)
                expect( editedContent ).toMatchSnapshot()
            })
        })
        describe( '🔬 Dropdown Settings', () => {
            test( '🔎 Columns Collapse Options', async () => {
                await blockStartup(block)

                await selectOption('Columns Collapse', 'is-mobile')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"collapse":"is-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                
                await selectOption('Columns Collapse', 'is-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"collapse":"is-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()


                await selectOption('Columns Collapse', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"collapse":"is-mobile"')).toBe(false)
                expect( editedContent.includes('"collapse":"is-desktop"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()
            })

            test( '🔎 Columns Background Color Options', async () => {
                await blockStartup(block)

                // black background option select
                await selectOption('Background Color', 'has-background-black')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"bgColor":"has-background-black"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                
                // light grey background option select
                await selectOption('Background Color', 'has-background-grey-lighter')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"bgColor":"has-background-grey-lighter"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()
                

                // dark grey background option select
                await selectOption('Background Color', 'has-background-black-ter')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"bgColor":"has-background-black-ter"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()


                // no background option select (DEFAULT)
                await selectOption('Background Color', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"bgColor":"has-background-black"')).toBe(false)
                expect( editedContent.includes('"bgColor":"has-background-grey-lighter"')).toBe(false)
                expect( editedContent.includes('"bgColor":"has-background-black-ter"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()
            })

        })
    })

})