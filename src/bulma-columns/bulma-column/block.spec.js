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
    selectOption, selectBlockByName, selectInnerBlock
} from '../../test-helpers'

const block = {blockTitle: 'Bulma - Columns', blockName: 'bulma-blocks/columns'}
const innerBlock = {blockTitle: 'Bulma - Column', blockName: 'bulma-blocks/column'}

const selectColumn = async () => {
    // select column and open the settings panel
    await selectInnerBlock() 
    await page.focus(`[data-type="${innerBlock.blockName}"]`)
    await clickElementByText('button', 'Block')
}

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
        expect(await page.$(`[data-type="${innerBlock.blockName}"]`)).not.toBeNull()
        expect( await getEditedPostContent() ).toMatchSnapshot()
    } )

    describe( '🔬 Side Panel Settings', () => {
        test( '🔎 Columns Background Color Options', async () => {
            await blockStartup(block)

            await selectColumn()

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
        
        describe( '🔬 Advanced Column Size Settings', () => {
            test( '🔎 Advanced Options Checkbox', async () => {
                await blockStartup(block)

                await selectColumn()

                await clickCheckbox('Advanced Size Settings')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"useExact":false')).toBe(true)
            })
            test( '🔎 Widescreen Options', async () => {
                await blockStartup(block)
                
                // first update the number of columns, sizes do not work on a single column
                const addColumns = 3
                await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, addColumns)

                // 1/2
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-half-widescreen')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeWide":"is-half-widescreen"')).toBe(true)

                // 1/3
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-one-third-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeWide":"is-one-third-widescreen"')).toBe(true)

                // 2/3
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-two-thirds-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-two-thirds-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/4
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-one-quarter-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-one-quarter-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/4
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-three-quarters-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-three-quarters-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/5
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-one-fifth-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-one-fifth-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2/5
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-two-fifths-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-two-fifths-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/5
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-three-fifths-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-three-fifths-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                //4/5
                await selectColumn()
                await selectOption('Widescreen Column Size', 'is-four-fifths-widescreen')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-four-fifths-widescreen"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // auto
                await selectColumn()
                await selectOption('Widescreen Column Size', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeWide":"is-half-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-one-third-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-two-thirds-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-one-quarter-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-three-quarters-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-one-fifth-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-two-fifths-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-three-fifths-widescreen"')).toBe(false)
                expect( editedContent.includes('"sizeWide":"is-four-fifths-widescreen"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()

                
            })

            test( '🔎 Desktop Options', async () => {
                await blockStartup(block)
                
                // first update the number of columns, sizes do not work on a single column
                const addColumns = 3
                await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, addColumns)

                // 1/2
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-half-desktop')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeDesk":"is-half-desktop"')).toBe(true)

                // 1/3
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-one-third-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeDesk":"is-one-third-desktop"')).toBe(true)

                // 2/3
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-two-thirds-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-two-thirds-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/4
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-one-quarter-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-one-quarter-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/4
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-three-quarters-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-three-quarters-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/5
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-one-fifth-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-one-fifth-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2/5
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-two-fifths-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-two-fifths-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/5
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-three-fifths-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-three-fifths-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                //4/5
                await selectColumn()
                await selectOption('Desktop Column Size', 'is-four-fifths-desktop')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-four-fifths-desktop"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // auto
                await selectColumn()
                await selectOption('Desktop Column Size', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeDesk":"is-half-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-one-third-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-two-thirds-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-one-quarter-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-three-quarters-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-one-fifth-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-two-fifths-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-three-fifths-desktop"')).toBe(false)
                expect( editedContent.includes('"sizeDesk":"is-four-fifths-desktop"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()

                
            })

            test( '🔎 Tablet Options', async () => {
                await blockStartup(block)
                
                // first update the number of columns, sizes do not work on a single column
                const addColumns = 3
                await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, addColumns)

                // 1/2
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-half-tablet')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeTab":"is-half-tablet"')).toBe(true)

                // 1/3
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-one-third-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeTab":"is-one-third-tablet"')).toBe(true)

                // 2/3
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-two-thirds-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-two-thirds-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/4
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-one-quarter-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-one-quarter-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/4
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-three-quarters-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-three-quarters-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/5
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-one-fifth-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-one-fifth-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2/5
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-two-fifths-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-two-fifths-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/5
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-three-fifths-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-three-fifths-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                //4/5
                await selectColumn()
                await selectOption('Tablet Column Size', 'is-four-fifths-tablet')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-four-fifths-tablet"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // auto
                await selectColumn()
                await selectOption('Tablet Column Size', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeTab":"is-half-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-one-third-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-two-thirds-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-one-quarter-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-three-quarters-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-one-fifth-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-two-fifths-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-three-fifths-tablet"')).toBe(false)
                expect( editedContent.includes('"sizeTab":"is-four-fifths-tablet"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()

                
            })

            test( '🔎 Mobile Options', async () => {
                await blockStartup(block)
                
                // first update the number of columns, sizes do not work on a single column
                const addColumns = 3
                await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, addColumns)

                // 1/2
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-half-mobile')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeMo":"is-half-mobile"')).toBe(true)

                // 1/3
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-one-third-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"sizeMo":"is-one-third-mobile"')).toBe(true)

                // 2/3
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-two-thirds-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-two-thirds-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/4
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-one-quarter-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-one-quarter-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/4
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-three-quarters-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-three-quarters-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/5
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-one-fifth-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-one-fifth-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2/5
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-two-fifths-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-two-fifths-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/5
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-three-fifths-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-three-fifths-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                //4/5
                await selectColumn()
                await selectOption('Mobile Column Size', 'is-four-fifths-mobile')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-four-fifths-mobile"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // auto
                await selectColumn()
                await selectOption('Mobile Column Size', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"sizeMo":"is-half-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-one-third-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-two-thirds-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-one-quarter-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-three-quarters-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-one-fifth-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-two-fifths-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-three-fifths-mobile"')).toBe(false)
                expect( editedContent.includes('"sizeMo":"is-four-fifths-mobile"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()

                
            })

        })
    
        describe( '🔬 Simple Column Size Setting', () => {

            test( '🔎 Simple Column Size Options', async () => {
                await blockStartup(block)
                
                // first update the number of columns, sizes do not work on a single column
                const addColumns = 3
                await updateRangeInput(`.components-input-control__input[aria-label="Number of Columns"]`, addColumns)

                // swap to simple column settings
                await selectColumn()
                await clickCheckbox('Advanced Size Settings')

                // 1/2
                await selectColumn()
                await selectOption('Column Size', 'is-half')
                
                let editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"size":"is-half"')).toBe(true)

                // 1/3
                await selectColumn()
                await selectOption('Column Size', 'is-one-third')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent ).toMatchSnapshot()
                expect( editedContent.includes('"size":"is-one-third"')).toBe(true)

                // 2/3
                await selectColumn()
                await selectOption('Column Size', 'is-two-thirds')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-two-thirds"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/4
                await selectColumn()
                await selectOption('Column Size', 'is-one-quarter')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-one-quarter"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/4
                await selectColumn()
                await selectOption('Column Size', 'is-three-quarters')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-three-quarters"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 1/5
                await selectColumn()
                await selectOption('Column Size', 'is-one-fifth')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-one-fifth"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 2/5
                await selectColumn()
                await selectOption('Column Size', 'is-two-fifths')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-two-fifths"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // 3/5
                await selectColumn()
                await selectOption('Column Size', 'is-three-fifths')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-three-fifths"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                //4/5
                await selectColumn()
                await selectOption('Column Size', 'is-four-fifths')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-four-fifths"')).toBe(true)
                expect( editedContent ).toMatchSnapshot()

                // auto
                await selectColumn()
                await selectOption('Column Size', '')
                
                editedContent = await getEditedPostContent()
                
                expect( editedContent.includes('"size":"is-half"')).toBe(false)
                expect( editedContent.includes('"size":"is-one-third"')).toBe(false)
                expect( editedContent.includes('"size":"is-two-thirds"')).toBe(false)
                expect( editedContent.includes('"size":"is-one-quarter"')).toBe(false)
                expect( editedContent.includes('"size":"is-three-quarters"')).toBe(false)
                expect( editedContent.includes('"size":"is-one-fifth"')).toBe(false)
                expect( editedContent.includes('"size":"is-two-fifths"')).toBe(false)
                expect( editedContent.includes('"size":"is-three-fifths"')).toBe(false)
                expect( editedContent.includes('"size":"is-four-fifths"')).toBe(false)
                expect( editedContent ).toMatchSnapshot()

                
            })
        })
    })

})