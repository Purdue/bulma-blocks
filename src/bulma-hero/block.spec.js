jest.setTimeout(30000)
import {
    createNewPost,
    enablePageDialogAccept,
    getEditedPostContent,
    insertBlock
} from '@wordpress/e2e-test-utils';

import {
    clickRadio,
    blockStartup,
    selectOption
} from '../test-helpers'

const block = {blockTitle: 'Bulma - Hero', blockName: 'bulma-blocks/hero'}

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
        describe( '🔬 Radio Settings', () => {
            test( '🔎 Padding Size Options', async () => {
                await blockStartup(block)

                // select medium padding
                await clickRadio('Padding Size', 'is-medium')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"option":"is-medium"')).toBe(true)

                // select large padding
                await clickRadio('Padding Size', 'is-large')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"option":"is-large"')).toBe(true)

                // select small padding
                await clickRadio('Padding Size', 'sm')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"option":"is-medium"')).toBe(false)
                expect( editedContent.includes('"option":"is-large"')).toBe(false)
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