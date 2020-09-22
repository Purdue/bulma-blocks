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

const block = {blockTitle: 'Bulma - Container', blockName: 'bulma-blocks/container'}

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
        describe( '🔬 Checkbox Settings', () => {
            test( '🔎 Full Width Option', async () => {
                await blockStartup(block)

                await clickCheckbox('Fluid Full-width')
                
                const editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"fluidChecked":true')).toBe(true)
                expect( editedContent ).toMatchSnapshot()
            })
        })
        describe( '🔬 Dropdown Settings', () => {
            test( '🔎 Background Color Options', async () => {
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