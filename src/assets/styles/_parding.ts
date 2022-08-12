import { ThemeApiType } from '../../types';

const padding = (config: ThemeApiType) => {
  return `
   
        //pa
        .pa-0 {padding: 0 ;}
        .pa-1 {padding: 4px ;}
        .pa-2 {padding: 8px ;}
        .pa-3 {padding: 12px ;}
        .pa-4 {padding: 16px ;}
        .pa-5 {padding: 20px ;}
        .pa-6 {padding: 24px ;}
        .pa-7 {padding: 28px ;}
        .pa-8 {padding: 32px ;}
        .pa-9 {padding: 36px ;}
        .pa-10 {padding: 40px ;}
        .pa-11 {padding: 44px ;}
        .pa-12 {padding: 48px ;}
        .pa-13 {padding: 52px ;}
        .pa-14 {padding: 56px ;}
        .pa-15 {padding: 60px ;}
        .pa-16 {padding: 64px ;}
    
        //pa negative
        .pa-n1 {padding: -4px ;}
        .pa-n2 {padding: -8px ;}
        .pa-n3 {padding: -12px ;}
        .pa-n4 {padding: -16px ;}
        .pa-n5 {padding: -20px ;}
        .pa-n6 {padding: -24px ;}
        .pa-n7 {padding: -28px ;}
        .pa-n8 {padding: -32px ;}
        .pa-n9 {padding: -36px ;}
        .pa-n10 {padding: -40px ;}
        .pa-n11 {padding: -44px ;}
        .pa-n12 {padding: -48px ;}
        .pa-n13 {padding: -52px ;}
        .pa-n14 {padding: -56px ;}
        .pa-n15 {padding: -60px ;}
        .pa-n16 {padding: -64px ;}
    
        //pt
        .pt-0 {padding-top: 0 ;}
        .pt-1 {padding-top: 4px ;}
        .pt-2 {padding-top: 8px ;}
        .pt-3 {padding-top: 12px ;}
        .pt-4 {padding-top: 16px ;}
        .pt-5 {padding-top: 20px ;}
        .pt-6 {padding-top: 24px ;}
        .pt-7 {padding-top: 28px ;}
        .pt-8 {padding-top: 32px ;}
        .pt-9 {padding-top: 36px ;}
        .pt-10 {padding-top: 40px ;}
        .pt-11 {padding-top: 44px ;}
        .pt-12 {padding-top: 48px ;}
        .pt-13 {padding-top: 52px ;}
        .pt-14 {padding-top: 56px ;}
        .pt-15 {padding-top: 60px ;}
        .pt-16 {padding-top: 64px ;}
    
        //pt negative
        .pt-n1 {padding-top: -4px ;}
        .pt-n2 {padding-top: -8px ;}
        .pt-n3 {padding-top: -12px ;}
        .pt-n4 {padding-top: -16px ;}
        .pt-n5 {padding-top: -20px ;}
        .pt-n6 {padding-top: -24px ;}
        .pt-n7 {padding-top: -28px ;}
        .pt-n8 {padding-top: -32px ;}
        .pt-n9 {padding-top: -36px ;}
        .pt-n10 {padding-top: -40px ;}
        .pt-n11 {padding-top: -44px ;}
        .pt-n12 {padding-top: -48px ;}
        .pt-n13 {padding-top: -52px ;}
        .pt-n14 {padding-top: -56px ;}
        .pt-n15 {padding-top: -60px ;}
        .pt-n16 {padding-top: -64px ;}
    
        //pb
        .pb-0 {padding-bottom: 0 ;}
        .pb-1 {padding-bottom: 4px ;}
        .pb-2 {padding-bottom: 8px ;}
        .pb-3 {padding-bottom: 12px ;}
        .pb-4 {padding-bottom: 16px ;}
        .pb-5 {padding-bottom: 20px ;}
        .pb-6 {padding-bottom: 24px ;}
        .pb-7 {padding-bottom: 28px ;}
        .pb-8 {padding-bottom: 32px ;}
        .pb-9 {padding-bottom: 36px ;}
        .pb-10 {padding-bottom: 40px ;}
        .pb-11 {padding-bottom: 44px ;}
        .pb-12 {padding-bottom: 48px ;}
        .pb-13 {padding-bottom: 52px ;}
        .pb-14 {padding-bottom: 56px ;}
        .pb-15 {padding-bottom: 60px ;}
        .pb-16 {padding-bottom: 64px ;}
    
    
        //pb negative
        .pb-n1 {padding-bottom: -4px ;}
        .pb-n2 {padding-bottom: -8px ;}
        .pb-n3 {padding-bottom: -12px ;}
        .pb-n4 {padding-bottom: -16px ;}
        .pb-n5 {padding-bottom: -20px ;}
        .pb-n6 {padding-bottom: -24px ;}
        .pb-n7 {padding-bottom: -28px ;}
        .pb-n8 {padding-bottom: -32px ;}
        .pb-n9 {padding-bottom: -36px ;}
        .pb-n10 {padding-bottom: -40px ;}
        .pb-n11 {padding-bottom: -44px ;}
        .pb-n12 {padding-bottom: -48px ;}
        .pb-n13 {padding-bottom: -52px ;}
        .pb-n14 {padding-bottom: -56px ;}
        .pb-n15 {padding-bottom: -60px ;}
        .pb-n16 {padding-bottom: -64px ;}
    
        //pl
        .pl-0 {padding-left: 0 ;}
        .pl-1 {padding-left: 4px ;}
        .pl-2 {padding-left: 8px ;}
        .pl-3 {padding-left: 12px ;}
        .pl-4 {padding-left: 16px ;}
        .pl-5 {padding-left: 20px ;}
        .pl-6 {padding-left: 24px ;}
        .pl-7 {padding-left: 28px ;}
        .pl-8 {padding-left: 32px ;}
        .pl-9 {padding-left: 36px ;}
        .pl-10 {padding-left: 40px ;}
        .pl-11 {padding-left: 44px ;}
        .pl-12 {padding-left: 48px ;}
        .pl-13 {padding-left: 52px ;}
        .pl-14 {padding-left: 56px ;}
        .pl-15 {padding-left: 60px ;}
        .pl-16 {padding-left: 64px ;}
    
        //pl negative
        .pl-n1 {padding-left: -4px ;}
        .pl-n2 {padding-left: -8px ;}
        .pl-n3 {padding-left: -12px ;}
        .pl-n4 {padding-left: -16px ;}
        .pl-n5 {padding-left: -20px ;}
        .pl-n6 {padding-left: -24px ;}
        .pl-n7 {padding-left: -28px ;}
        .pl-n8 {padding-left: -32px ;}
        .pl-n9 {padding-left: -36px ;}
        .pl-n10 {padding-left: -40px ;}
        .pl-n11 {padding-left: -44px ;}
        .pl-n12 {padding-left: -48px ;}
        .pl-n13 {padding-left: -52px ;}
        .pl-n14 {padding-left: -56px ;}
        .pl-n15 {padding-left: -60px ;}
        .pl-n16 {padding-left: -64px ;}
    
        //pr
        .pr-0 {padding-right: 0 ;}
        .pr-1 {padding-right: 4px ;}
        .pr-2 {padding-right: 8px ;}
        .pr-3 {padding-right: 12px ;}
        .pr-4 {padding-right: 16px ;}
        .pr-5 {padding-right: 20px ;}
        .pr-6 {padding-right: 24px ;}
        .pr-7 {padding-right: 28px ;}
        .pr-8 {padding-right: 32px ;}
        .pr-9 {padding-right: 36px ;}
        .pr-10 {padding-right: 40px ;}
        .pr-11 {padding-right: 44px ;}
        .pr-12 {padding-right: 48px ;}
        .pr-13 {padding-right: 52px ;}
        .pr-14 {padding-right: 56px ;}
        .pr-15 {padding-right: 60px ;}
        .pr-16 {padding-right: 64px ;}
    
        //pr negative
        .pr-n1 {padding-right: -4px ;}
        .pr-n2 {padding-right: -8px ;}
        .pr-n3 {padding-right: -12px ;}
        .pr-n4 {padding-right: -16px ;}
        .pr-n5 {padding-right: -20px ;}
        .pr-n6 {padding-right: -24px ;}
        .pr-n7 {padding-right: -28px ;}
        .pr-n8 {padding-right: -32px ;}
        .pr-n9 {padding-right: -36px ;}
        .pr-n10 {padding-right: -40px ;}
        .pr-n11 {padding-right: -44px ;}
        .pr-n12 {padding-right: -48px ;}
        .pr-n13 {padding-right: -52px ;}
        .pr-n14 {padding-right: -56px ;}
        .pr-n15 {padding-right: -60px ;}
        .pr-n16 {padding-right: -64px ;}
    
        //px
        .px-0 {padding-left: 0 ; padding-right: 0 ;}
        .px-1 {padding-left: 4px ; padding-right: 4px ;}
        .px-2 {padding-left: 8px ; padding-right: 8px ;}
        .px-3 {padding-left: 12px ; padding-right: 12px ;}
        .px-4 {padding-left: 16px ; padding-right: 16px ;}
        .px-5 {padding-left: 20px ; padding-right: 20px ;}
        .px-6 {padding-left: 24px ; padding-right: 24px ;}
        .px-7 {padding-left: 28px ; padding-right: 28px ;}
        .px-8 {padding-left: 32px ; padding-right: 32px ;}
        .px-9 {padding-left: 36px ; padding-right: 36px ;}
        .px-10 {padding-left: 40px ; padding-right: 40px ;}
        .px-11 {padding-left: 44px ; padding-right: 44px ;}
        .px-12 {padding-left: 48px ; padding-right: 48px ;}
        .px-13 {padding-left: 52px ; padding-right: 52px ;}
        .px-14 {padding-left: 56px ; padding-right: 56px ;}
        .px-15 {padding-left: 60px ; padding-right: 60px ;}
        .px-16 {padding-left: 64px ; padding-right: 64px ;}
    
        //px negative
        .px-n1 {padding-left: -4px ; padding-right: -4px ;}
        .px-n2 {padding-left: -8px ; padding-right: -8px ;}
        .px-n3 {padding-left: -12px ; padding-right: -12px ;}
        .px-n4 {padding-left: -16px ; padding-right: -16px ;}
        .px-n5 {padding-left: -20px ; padding-right: -20px ;}
        .px-n6 {padding-left: -24px ; padding-right: -24px ;}
        .px-n7 {padding-left: -28px ; padding-right: -28px ;}
        .px-n8 {padding-left: -32px ; padding-right: -32px ;}
        .px-n9 {padding-left: -36px ; padding-right: -36px ;}
        .px-n10 {padding-left: -40px ; padding-right: -40px ;}
        .px-n11 {padding-left: -44px ; padding-right: -44px ;}
        .px-n12 {padding-left: -48px ; padding-right: -48px ;}
        .px-n13 {padding-left: -52px ; padding-right: -52px ;}
        .px-n14 {padding-left: -56px ; padding-right: -56px ;}
        .px-n15 {padding-left: -60px ; padding-right: -60px ;}
        .px-n16 {padding-left: -64px ; padding-right: -64px ;}
    
    
        //py
        .py-0 {padding-top: 0 ; padding-bottom: 0 ;}
        .py-1 {padding-top: 4px ; padding-bottom: 4px ;}
        .py-2 {padding-top: 8px ; padding-bottom: 8px ;}
        .py-3 {padding-top: 12px ; padding-bottom: 12px ;}
        .py-4 {padding-top: 16px ; padding-bottom: 16px ;}
        .py-5 {padding-top: 20px ; padding-bottom: 20px ;}
        .py-6 {padding-top: 24px ; padding-bottom: 24px ;}
        .py-7 {padding-top: 28px ; padding-bottom: 28px ;}
        .py-8 {padding-top: 32px ; padding-bottom: 32px ;}
        .py-9 {padding-top: 36px ; padding-bottom: 36px ;}
        .py-10 {padding-top: 40px ; padding-bottom: 40px ;}
        .py-11 {padding-top: 44px ; padding-bottom: 44px ;}
        .py-12 {padding-top: 48px ; padding-bottom: 48px ;}
        .py-13 {padding-top: 52px ; padding-bottom: 52px ;}
        .py-14 {padding-top: 56px ; padding-bottom: 56px ;}
        .py-15 {padding-top: 60px ; padding-bottom: 60px ;}
        .py-16 {padding-top: 64px ; padding-bottom: 64px ;}
    
    
        //py negative
        .py-n1 {padding-top: -4px ; padding-bottom: -4px ;}
        .py-n2 {padding-top: -8px ; padding-bottom: -8px ;}
        .py-n3 {padding-top: -12px ; padding-bottom: -12px ;}
        .py-n4 {padding-top: -16px ; padding-bottom: -16px ;}
        .py-n5 {padding-top: -20px ; padding-bottom: -20px ;}
        .py-n6 {padding-top: -24px ; padding-bottom: -24px ;}
        .py-n7 {padding-top: -28px ; padding-bottom: -28px ;}
        .py-n8 {padding-top: -32px ; padding-bottom: -32px ;}
        .py-n9 {padding-top: -36px ; padding-bottom: -36px ;}
        .py-n10 {padding-top: -40px ; padding-bottom: -40px ;}
        .py-n11 {padding-top: -44px ; padding-bottom: -44px ;}
        .py-n12 {padding-top: -48px ; padding-bottom: -48px ;}
        .py-n13 {padding-top: -52px ; padding-bottom: -52px ;}
        .py-n14 {padding-top: -56px ; padding-bottom: -56px ;}
        .py-n15 {padding-top: -60px ; padding-bottom: -60px ;}
        .py-n16 {padding-top: -64px ; padding-bottom: -64px ;}

      @media screen and (min-width: ${config.sys.breakpoint.xs}) {
        //pa
        .pa-xs-0 {padding: 0 ;}
        .pa-xs-1 {padding: 4px ;}
        .pa-xs-2 {padding: 8px ;}
        .pa-xs-3 {padding: 12px ;}
        .pa-xs-4 {padding: 16px ;}
        .pa-xs-5 {padding: 20px ;}
        .pa-xs-6 {padding: 24px ;}
        .pa-xs-7 {padding: 28px ;}
        .pa-xs-8 {padding: 32px ;}
        .pa-xs-9 {padding: 36px ;}
        .pa-xs-10 {padding: 40px ;}
        .pa-xs-11 {padding: 44px ;}
        .pa-xs-12 {padding: 48px ;}
        .pa-xs-13 {padding: 52px ;}
        .pa-xs-14 {padding: 56px ;}
        .pa-xs-15 {padding: 60px ;}
        .pa-xs-16 {padding: 64px ;}
    
        //pa negative
        .pa-xs-n1 {padding: -4px ;}
        .pa-xs-n2 {padding: -8px ;}
        .pa-xs-n3 {padding: -12px ;}
        .pa-xs-n4 {padding: -16px ;}
        .pa-xs-n5 {padding: -20px ;}
        .pa-xs-n6 {padding: -24px ;}
        .pa-xs-n7 {padding: -28px ;}
        .pa-xs-n8 {padding: -32px ;}
        .pa-xs-n9 {padding: -36px ;}
        .pa-xs-n10 {padding: -40px ;}
        .pa-xs-n11 {padding: -44px ;}
        .pa-xs-n12 {padding: -48px ;}
        .pa-xs-n13 {padding: -52px ;}
        .pa-xs-n14 {padding: -56px ;}
        .pa-xs-n15 {padding: -60px ;}
        .pa-xs-n16 {padding: -64px ;}
    
        //pt
        .pt-xs-0 {padding-top: 0 ;}
        .pt-xs-1 {padding-top: 4px ;}
        .pt-xs-2 {padding-top: 8px ;}
        .pt-xs-3 {padding-top: 12px ;}
        .pt-xs-4 {padding-top: 16px ;}
        .pt-xs-5 {padding-top: 20px ;}
        .pt-xs-6 {padding-top: 24px ;}
        .pt-xs-7 {padding-top: 28px ;}
        .pt-xs-8 {padding-top: 32px ;}
        .pt-xs-9 {padding-top: 36px ;}
        .pt-xs-10 {padding-top: 40px ;}
        .pt-xs-11 {padding-top: 44px ;}
        .pt-xs-12 {padding-top: 48px ;}
        .pt-xs-13 {padding-top: 52px ;}
        .pt-xs-14 {padding-top: 56px ;}
        .pt-xs-15 {padding-top: 60px ;}
        .pt-xs-16 {padding-top: 64px ;}
    
        //pt negative
        .pt-xs-n1 {padding-top: -4px ;}
        .pt-xs-n2 {padding-top: -8px ;}
        .pt-xs-n3 {padding-top: -12px ;}
        .pt-xs-n4 {padding-top: -16px ;}
        .pt-xs-n5 {padding-top: -20px ;}
        .pt-xs-n6 {padding-top: -24px ;}
        .pt-xs-n7 {padding-top: -28px ;}
        .pt-xs-n8 {padding-top: -32px ;}
        .pt-xs-n9 {padding-top: -36px ;}
        .pt-xs-n10 {padding-top: -40px ;}
        .pt-xs-n11 {padding-top: -44px ;}
        .pt-xs-n12 {padding-top: -48px ;}
        .pt-xs-n13 {padding-top: -52px ;}
        .pt-xs-n14 {padding-top: -56px ;}
        .pt-xs-n15 {padding-top: -60px ;}
        .pt-xs-n16 {padding-top: -64px ;}
    
        //pb
        .pb-xs-0 {padding-bottom: 0 ;}
        .pb-xs-1 {padding-bottom: 4px ;}
        .pb-xs-2 {padding-bottom: 8px ;}
        .pb-xs-3 {padding-bottom: 12px ;}
        .pb-xs-4 {padding-bottom: 16px ;}
        .pb-xs-5 {padding-bottom: 20px ;}
        .pb-xs-6 {padding-bottom: 24px ;}
        .pb-xs-7 {padding-bottom: 28px ;}
        .pb-xs-8 {padding-bottom: 32px ;}
        .pb-xs-9 {padding-bottom: 36px ;}
        .pb-xs-10 {padding-bottom: 40px ;}
        .pb-xs-11 {padding-bottom: 44px ;}
        .pb-xs-12 {padding-bottom: 48px ;}
        .pb-xs-13 {padding-bottom: 52px ;}
        .pb-xs-14 {padding-bottom: 56px ;}
        .pb-xs-15 {padding-bottom: 60px ;}
        .pb-xs-16 {padding-bottom: 64px ;}
    
    
        //pb negative
        .pb-xs-n1 {padding-bottom: -4px ;}
        .pb-xs-n2 {padding-bottom: -8px ;}
        .pb-xs-n3 {padding-bottom: -12px ;}
        .pb-xs-n4 {padding-bottom: -16px ;}
        .pb-xs-n5 {padding-bottom: -20px ;}
        .pb-xs-n6 {padding-bottom: -24px ;}
        .pb-xs-n7 {padding-bottom: -28px ;}
        .pb-xs-n8 {padding-bottom: -32px ;}
        .pb-xs-n9 {padding-bottom: -36px ;}
        .pb-xs-n10 {padding-bottom: -40px ;}
        .pb-xs-n11 {padding-bottom: -44px ;}
        .pb-xs-n12 {padding-bottom: -48px ;}
        .pb-xs-n13 {padding-bottom: -52px ;}
        .pb-xs-n14 {padding-bottom: -56px ;}
        .pb-xs-n15 {padding-bottom: -60px ;}
        .pb-xs-n16 {padding-bottom: -64px ;}
    
        //pl
        .pl-xs-0 {padding-left: 0 ;}
        .pl-xs-1 {padding-left: 4px ;}
        .pl-xs-2 {padding-left: 8px ;}
        .pl-xs-3 {padding-left: 12px ;}
        .pl-xs-4 {padding-left: 16px ;}
        .pl-xs-5 {padding-left: 20px ;}
        .pl-xs-6 {padding-left: 24px ;}
        .pl-xs-7 {padding-left: 28px ;}
        .pl-xs-8 {padding-left: 32px ;}
        .pl-xs-9 {padding-left: 36px ;}
        .pl-xs-10 {padding-left: 40px ;}
        .pl-xs-11 {padding-left: 44px ;}
        .pl-xs-12 {padding-left: 48px ;}
        .pl-xs-13 {padding-left: 52px ;}
        .pl-xs-14 {padding-left: 56px ;}
        .pl-xs-15 {padding-left: 60px ;}
        .pl-xs-16 {padding-left: 64px ;}
    
        //pl negative
        .pl-xs-n1 {padding-left: -4px ;}
        .pl-xs-n2 {padding-left: -8px ;}
        .pl-xs-n3 {padding-left: -12px ;}
        .pl-xs-n4 {padding-left: -16px ;}
        .pl-xs-n5 {padding-left: -20px ;}
        .pl-xs-n6 {padding-left: -24px ;}
        .pl-xs-n7 {padding-left: -28px ;}
        .pl-xs-n8 {padding-left: -32px ;}
        .pl-xs-n9 {padding-left: -36px ;}
        .pl-xs-n10 {padding-left: -40px ;}
        .pl-xs-n11 {padding-left: -44px ;}
        .pl-xs-n12 {padding-left: -48px ;}
        .pl-xs-n13 {padding-left: -52px ;}
        .pl-xs-n14 {padding-left: -56px ;}
        .pl-xs-n15 {padding-left: -60px ;}
        .pl-xs-n16 {padding-left: -64px ;}
    
        //pr
        .pr-xs-0 {padding-right: 0 ;}
        .pr-xs-1 {padding-right: 4px ;}
        .pr-xs-2 {padding-right: 8px ;}
        .pr-xs-3 {padding-right: 12px ;}
        .pr-xs-4 {padding-right: 16px ;}
        .pr-xs-5 {padding-right: 20px ;}
        .pr-xs-6 {padding-right: 24px ;}
        .pr-xs-7 {padding-right: 28px ;}
        .pr-xs-8 {padding-right: 32px ;}
        .pr-xs-9 {padding-right: 36px ;}
        .pr-xs-10 {padding-right: 40px ;}
        .pr-xs-11 {padding-right: 44px ;}
        .pr-xs-12 {padding-right: 48px ;}
        .pr-xs-13 {padding-right: 52px ;}
        .pr-xs-14 {padding-right: 56px ;}
        .pr-xs-15 {padding-right: 60px ;}
        .pr-xs-16 {padding-right: 64px ;}
    
        //pr negative
        .pr-xs-n1 {padding-right: -4px ;}
        .pr-xs-n2 {padding-right: -8px ;}
        .pr-xs-n3 {padding-right: -12px ;}
        .pr-xs-n4 {padding-right: -16px ;}
        .pr-xs-n5 {padding-right: -20px ;}
        .pr-xs-n6 {padding-right: -24px ;}
        .pr-xs-n7 {padding-right: -28px ;}
        .pr-xs-n8 {padding-right: -32px ;}
        .pr-xs-n9 {padding-right: -36px ;}
        .pr-xs-n10 {padding-right: -40px ;}
        .pr-xs-n11 {padding-right: -44px ;}
        .pr-xs-n12 {padding-right: -48px ;}
        .pr-xs-n13 {padding-right: -52px ;}
        .pr-xs-n14 {padding-right: -56px ;}
        .pr-xs-n15 {padding-right: -60px ;}
        .pr-xs-n16 {padding-right: -64px ;}
    
        //px
        .px-xs-0 {padding-left: 0 ; padding-right: 0 ;}
        .px-xs-1 {padding-left: 4px ; padding-right: 4px ;}
        .px-xs-2 {padding-left: 8px ; padding-right: 8px ;}
        .px-xs-3 {padding-left: 12px ; padding-right: 12px ;}
        .px-xs-4 {padding-left: 16px ; padding-right: 16px ;}
        .px-xs-5 {padding-left: 20px ; padding-right: 20px ;}
        .px-xs-6 {padding-left: 24px ; padding-right: 24px ;}
        .px-xs-7 {padding-left: 28px ; padding-right: 28px ;}
        .px-xs-8 {padding-left: 32px ; padding-right: 32px ;}
        .px-xs-9 {padding-left: 36px ; padding-right: 36px ;}
        .px-xs-10 {padding-left: 40px ; padding-right: 40px ;}
        .px-xs-11 {padding-left: 44px ; padding-right: 44px ;}
        .px-xs-12 {padding-left: 48px ; padding-right: 48px ;}
        .px-xs-13 {padding-left: 52px ; padding-right: 52px ;}
        .px-xs-14 {padding-left: 56px ; padding-right: 56px ;}
        .px-xs-15 {padding-left: 60px ; padding-right: 60px ;}
        .px-xs-16 {padding-left: 64px ; padding-right: 64px ;}
    
        //px negative
        .px-xs-n1 {padding-left: -4px ; padding-right: -4px ;}
        .px-xs-n2 {padding-left: -8px ; padding-right: -8px ;}
        .px-xs-n3 {padding-left: -12px ; padding-right: -12px ;}
        .px-xs-n4 {padding-left: -16px ; padding-right: -16px ;}
        .px-xs-n5 {padding-left: -20px ; padding-right: -20px ;}
        .px-xs-n6 {padding-left: -24px ; padding-right: -24px ;}
        .px-xs-n7 {padding-left: -28px ; padding-right: -28px ;}
        .px-xs-n8 {padding-left: -32px ; padding-right: -32px ;}
        .px-xs-n9 {padding-left: -36px ; padding-right: -36px ;}
        .px-xs-n10 {padding-left: -40px ; padding-right: -40px ;}
        .px-xs-n11 {padding-left: -44px ; padding-right: -44px ;}
        .px-xs-n12 {padding-left: -48px ; padding-right: -48px ;}
        .px-xs-n13 {padding-left: -52px ; padding-right: -52px ;}
        .px-xs-n14 {padding-left: -56px ; padding-right: -56px ;}
        .px-xs-n15 {padding-left: -60px ; padding-right: -60px ;}
        .px-xs-n16 {padding-left: -64px ; padding-right: -64px ;}
    
    
        //py
        .py-xs-0 {padding-top: 0 ; padding-bottom: 0 ;}
        .py-xs-1 {padding-top: 4px ; padding-bottom: 4px ;}
        .py-xs-2 {padding-top: 8px ; padding-bottom: 8px ;}
        .py-xs-3 {padding-top: 12px ; padding-bottom: 12px ;}
        .py-xs-4 {padding-top: 16px ; padding-bottom: 16px ;}
        .py-xs-5 {padding-top: 20px ; padding-bottom: 20px ;}
        .py-xs-6 {padding-top: 24px ; padding-bottom: 24px ;}
        .py-xs-7 {padding-top: 28px ; padding-bottom: 28px ;}
        .py-xs-8 {padding-top: 32px ; padding-bottom: 32px ;}
        .py-xs-9 {padding-top: 36px ; padding-bottom: 36px ;}
        .py-xs-10 {padding-top: 40px ; padding-bottom: 40px ;}
        .py-xs-11 {padding-top: 44px ; padding-bottom: 44px ;}
        .py-xs-12 {padding-top: 48px ; padding-bottom: 48px ;}
        .py-xs-13 {padding-top: 52px ; padding-bottom: 52px ;}
        .py-xs-14 {padding-top: 56px ; padding-bottom: 56px ;}
        .py-xs-15 {padding-top: 60px ; padding-bottom: 60px ;}
        .py-xs-16 {padding-top: 64px ; padding-bottom: 64px ;}
    
    
        //py negative
        .py-xs-n1 {padding-top: -4px ; padding-bottom: -4px ;}
        .py-xs-n2 {padding-top: -8px ; padding-bottom: -8px ;}
        .py-xs-n3 {padding-top: -12px ; padding-bottom: -12px ;}
        .py-xs-n4 {padding-top: -16px ; padding-bottom: -16px ;}
        .py-xs-n5 {padding-top: -20px ; padding-bottom: -20px ;}
        .py-xs-n6 {padding-top: -24px ; padding-bottom: -24px ;}
        .py-xs-n7 {padding-top: -28px ; padding-bottom: -28px ;}
        .py-xs-n8 {padding-top: -32px ; padding-bottom: -32px ;}
        .py-xs-n9 {padding-top: -36px ; padding-bottom: -36px ;}
        .py-xs-n10 {padding-top: -40px ; padding-bottom: -40px ;}
        .py-xs-n11 {padding-top: -44px ; padding-bottom: -44px ;}
        .py-xs-n12 {padding-top: -48px ; padding-bottom: -48px ;}
        .py-xs-n13 {padding-top: -52px ; padding-bottom: -52px ;}
        .py-xs-n14 {padding-top: -56px ; padding-bottom: -56px ;}
        .py-xs-n15 {padding-top: -60px ; padding-bottom: -60px ;}
        .py-xs-n16 {padding-top: -64px ; padding-bottom: -64px ;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.sm}) {
        //pa
        .pa-sm-0 {padding: 0 ;}
        .pa-sm-1 {padding: 4px ;}
        .pa-sm-2 {padding: 8px ;}
        .pa-sm-3 {padding: 12px ;}
        .pa-sm-4 {padding: 16px ;}
        .pa-sm-5 {padding: 20px ;}
        .pa-sm-6 {padding: 24px ;}
        .pa-sm-7 {padding: 28px ;}
        .pa-sm-8 {padding: 32px ;}
        .pa-sm-9 {padding: 36px ;}
        .pa-sm-10 {padding: 40px ;}
        .pa-sm-11 {padding: 44px ;}
        .pa-sm-12 {padding: 48px ;}
        .pa-sm-13 {padding: 52px ;}
        .pa-sm-14 {padding: 56px ;}
        .pa-sm-15 {padding: 60px ;}
        .pa-sm-16 {padding: 64px ;}
    
        //pa negative
        .pa-sm-n1 {padding: -4px ;}
        .pa-sm-n2 {padding: -8px ;}
        .pa-sm-n3 {padding: -12px ;}
        .pa-sm-n4 {padding: -16px ;}
        .pa-sm-n5 {padding: -20px ;}
        .pa-sm-n6 {padding: -24px ;}
        .pa-sm-n7 {padding: -28px ;}
        .pa-sm-n8 {padding: -32px ;}
        .pa-sm-n9 {padding: -36px ;}
        .pa-sm-n10 {padding: -40px ;}
        .pa-sm-n11 {padding: -44px ;}
        .pa-sm-n12 {padding: -48px ;}
        .pa-sm-n13 {padding: -52px ;}
        .pa-sm-n14 {padding: -56px ;}
        .pa-sm-n15 {padding: -60px ;}
        .pa-sm-n16 {padding: -64px ;}
    
        //pt
        .pt-sm-0 {padding-top: 0 ;}
        .pt-sm-1 {padding-top: 4px ;}
        .pt-sm-2 {padding-top: 8px ;}
        .pt-sm-3 {padding-top: 12px ;}
        .pt-sm-4 {padding-top: 16px ;}
        .pt-sm-5 {padding-top: 20px ;}
        .pt-sm-6 {padding-top: 24px ;}
        .pt-sm-7 {padding-top: 28px ;}
        .pt-sm-8 {padding-top: 32px ;}
        .pt-sm-9 {padding-top: 36px ;}
        .pt-sm-10 {padding-top: 40px ;}
        .pt-sm-11 {padding-top: 44px ;}
        .pt-sm-12 {padding-top: 48px ;}
        .pt-sm-13 {padding-top: 52px ;}
        .pt-sm-14 {padding-top: 56px ;}
        .pt-sm-15 {padding-top: 60px ;}
        .pt-sm-16 {padding-top: 64px ;}
    
        //pt negative
        .pt-sm-n1 {padding-top: -4px ;}
        .pt-sm-n2 {padding-top: -8px ;}
        .pt-sm-n3 {padding-top: -12px ;}
        .pt-sm-n4 {padding-top: -16px ;}
        .pt-sm-n5 {padding-top: -20px ;}
        .pt-sm-n6 {padding-top: -24px ;}
        .pt-sm-n7 {padding-top: -28px ;}
        .pt-sm-n8 {padding-top: -32px ;}
        .pt-sm-n9 {padding-top: -36px ;}
        .pt-sm-n10 {padding-top: -40px ;}
        .pt-sm-n11 {padding-top: -44px ;}
        .pt-sm-n12 {padding-top: -48px ;}
        .pt-sm-n13 {padding-top: -52px ;}
        .pt-sm-n14 {padding-top: -56px ;}
        .pt-sm-n15 {padding-top: -60px ;}
        .pt-sm-n16 {padding-top: -64px ;}
    
        //pb
        .pb-sm-0 {padding-bottom: 0 ;}
        .pb-sm-1 {padding-bottom: 4px ;}
        .pb-sm-2 {padding-bottom: 8px ;}
        .pb-sm-3 {padding-bottom: 12px ;}
        .pb-sm-4 {padding-bottom: 16px ;}
        .pb-sm-5 {padding-bottom: 20px ;}
        .pb-sm-6 {padding-bottom: 24px ;}
        .pb-sm-7 {padding-bottom: 28px ;}
        .pb-sm-8 {padding-bottom: 32px ;}
        .pb-sm-9 {padding-bottom: 36px ;}
        .pb-sm-10 {padding-bottom: 40px ;}
        .pb-sm-11 {padding-bottom: 44px ;}
        .pb-sm-12 {padding-bottom: 48px ;}
        .pb-sm-13 {padding-bottom: 52px ;}
        .pb-sm-14 {padding-bottom: 56px ;}
        .pb-sm-15 {padding-bottom: 60px ;}
        .pb-sm-16 {padding-bottom: 64px ;}
    
    
        //pb negative
        .pb-sm-n1 {padding-bottom: -4px ;}
        .pb-sm-n2 {padding-bottom: -8px ;}
        .pb-sm-n3 {padding-bottom: -12px ;}
        .pb-sm-n4 {padding-bottom: -16px ;}
        .pb-sm-n5 {padding-bottom: -20px ;}
        .pb-sm-n6 {padding-bottom: -24px ;}
        .pb-sm-n7 {padding-bottom: -28px ;}
        .pb-sm-n8 {padding-bottom: -32px ;}
        .pb-sm-n9 {padding-bottom: -36px ;}
        .pb-sm-n10 {padding-bottom: -40px ;}
        .pb-sm-n11 {padding-bottom: -44px ;}
        .pb-sm-n12 {padding-bottom: -48px ;}
        .pb-sm-n13 {padding-bottom: -52px ;}
        .pb-sm-n14 {padding-bottom: -56px ;}
        .pb-sm-n15 {padding-bottom: -60px ;}
        .pb-sm-n16 {padding-bottom: -64px ;}
    
        //pl
        .pl-sm-0 {padding-left: 0 ;}
        .pl-sm-1 {padding-left: 4px ;}
        .pl-sm-2 {padding-left: 8px ;}
        .pl-sm-3 {padding-left: 12px ;}
        .pl-sm-4 {padding-left: 16px ;}
        .pl-sm-5 {padding-left: 20px ;}
        .pl-sm-6 {padding-left: 24px ;}
        .pl-sm-7 {padding-left: 28px ;}
        .pl-sm-8 {padding-left: 32px ;}
        .pl-sm-9 {padding-left: 36px ;}
        .pl-sm-10 {padding-left: 40px ;}
        .pl-sm-11 {padding-left: 44px ;}
        .pl-sm-12 {padding-left: 48px ;}
        .pl-sm-13 {padding-left: 52px ;}
        .pl-sm-14 {padding-left: 56px ;}
        .pl-sm-15 {padding-left: 60px ;}
        .pl-sm-16 {padding-left: 64px ;}
    
        //pl negative
        .pl-sm-n1 {padding-left: -4px ;}
        .pl-sm-n2 {padding-left: -8px ;}
        .pl-sm-n3 {padding-left: -12px ;}
        .pl-sm-n4 {padding-left: -16px ;}
        .pl-sm-n5 {padding-left: -20px ;}
        .pl-sm-n6 {padding-left: -24px ;}
        .pl-sm-n7 {padding-left: -28px ;}
        .pl-sm-n8 {padding-left: -32px ;}
        .pl-sm-n9 {padding-left: -36px ;}
        .pl-sm-n10 {padding-left: -40px ;}
        .pl-sm-n11 {padding-left: -44px ;}
        .pl-sm-n12 {padding-left: -48px ;}
        .pl-sm-n13 {padding-left: -52px ;}
        .pl-sm-n14 {padding-left: -56px ;}
        .pl-sm-n15 {padding-left: -60px ;}
        .pl-sm-n16 {padding-left: -64px ;}
    
        //pr
        .pr-sm-0 {padding-right: 0 ;}
        .pr-sm-1 {padding-right: 4px ;}
        .pr-sm-2 {padding-right: 8px ;}
        .pr-sm-3 {padding-right: 12px ;}
        .pr-sm-4 {padding-right: 16px ;}
        .pr-sm-5 {padding-right: 20px ;}
        .pr-sm-6 {padding-right: 24px ;}
        .pr-sm-7 {padding-right: 28px ;}
        .pr-sm-8 {padding-right: 32px ;}
        .pr-sm-9 {padding-right: 36px ;}
        .pr-sm-10 {padding-right: 40px ;}
        .pr-sm-11 {padding-right: 44px ;}
        .pr-sm-12 {padding-right: 48px ;}
        .pr-sm-13 {padding-right: 52px ;}
        .pr-sm-14 {padding-right: 56px ;}
        .pr-sm-15 {padding-right: 60px ;}
        .pr-sm-16 {padding-right: 64px ;}
    
        //pr negative
        .pr-sm-n1 {padding-right: -4px ;}
        .pr-sm-n2 {padding-right: -8px ;}
        .pr-sm-n3 {padding-right: -12px ;}
        .pr-sm-n4 {padding-right: -16px ;}
        .pr-sm-n5 {padding-right: -20px ;}
        .pr-sm-n6 {padding-right: -24px ;}
        .pr-sm-n7 {padding-right: -28px ;}
        .pr-sm-n8 {padding-right: -32px ;}
        .pr-sm-n9 {padding-right: -36px ;}
        .pr-sm-n10 {padding-right: -40px ;}
        .pr-sm-n11 {padding-right: -44px ;}
        .pr-sm-n12 {padding-right: -48px ;}
        .pr-sm-n13 {padding-right: -52px ;}
        .pr-sm-n14 {padding-right: -56px ;}
        .pr-sm-n15 {padding-right: -60px ;}
        .pr-sm-n16 {padding-right: -64px ;}
    
        //px
        .px-sm-0 {padding-left: 0 ; padding-right: 0 ;}
        .px-sm-1 {padding-left: 4px ; padding-right: 4px ;}
        .px-sm-2 {padding-left: 8px ; padding-right: 8px ;}
        .px-sm-3 {padding-left: 12px ; padding-right: 12px ;}
        .px-sm-4 {padding-left: 16px ; padding-right: 16px ;}
        .px-sm-5 {padding-left: 20px ; padding-right: 20px ;}
        .px-sm-6 {padding-left: 24px ; padding-right: 24px ;}
        .px-sm-7 {padding-left: 28px ; padding-right: 28px ;}
        .px-sm-8 {padding-left: 32px ; padding-right: 32px ;}
        .px-sm-9 {padding-left: 36px ; padding-right: 36px ;}
        .px-sm-10 {padding-left: 40px ; padding-right: 40px ;}
        .px-sm-11 {padding-left: 44px ; padding-right: 44px ;}
        .px-sm-12 {padding-left: 48px ; padding-right: 48px ;}
        .px-sm-13 {padding-left: 52px ; padding-right: 52px ;}
        .px-sm-14 {padding-left: 56px ; padding-right: 56px ;}
        .px-sm-15 {padding-left: 60px ; padding-right: 60px ;}
        .px-sm-16 {padding-left: 64px ; padding-right: 64px ;}
    
        //px negative
        .px-sm-n1 {padding-left: -4px ; padding-right: -4px ;}
        .px-sm-n2 {padding-left: -8px ; padding-right: -8px ;}
        .px-sm-n3 {padding-left: -12px ; padding-right: -12px ;}
        .px-sm-n4 {padding-left: -16px ; padding-right: -16px ;}
        .px-sm-n5 {padding-left: -20px ; padding-right: -20px ;}
        .px-sm-n6 {padding-left: -24px ; padding-right: -24px ;}
        .px-sm-n7 {padding-left: -28px ; padding-right: -28px ;}
        .px-sm-n8 {padding-left: -32px ; padding-right: -32px ;}
        .px-sm-n9 {padding-left: -36px ; padding-right: -36px ;}
        .px-sm-n10 {padding-left: -40px ; padding-right: -40px ;}
        .px-sm-n11 {padding-left: -44px ; padding-right: -44px ;}
        .px-sm-n12 {padding-left: -48px ; padding-right: -48px ;}
        .px-sm-n13 {padding-left: -52px ; padding-right: -52px ;}
        .px-sm-n14 {padding-left: -56px ; padding-right: -56px ;}
        .px-sm-n15 {padding-left: -60px ; padding-right: -60px ;}
        .px-sm-n16 {padding-left: -64px ; padding-right: -64px ;}
    
    
        //py
        .py-sm-0 {padding-top: 0 ; padding-bottom: 0 ;}
        .py-sm-1 {padding-top: 4px ; padding-bottom: 4px ;}
        .py-sm-2 {padding-top: 8px ; padding-bottom: 8px ;}
        .py-sm-3 {padding-top: 12px ; padding-bottom: 12px ;}
        .py-sm-4 {padding-top: 16px ; padding-bottom: 16px ;}
        .py-sm-5 {padding-top: 20px ; padding-bottom: 20px ;}
        .py-sm-6 {padding-top: 24px ; padding-bottom: 24px ;}
        .py-sm-7 {padding-top: 28px ; padding-bottom: 28px ;}
        .py-sm-8 {padding-top: 32px ; padding-bottom: 32px ;}
        .py-sm-9 {padding-top: 36px ; padding-bottom: 36px ;}
        .py-sm-10 {padding-top: 40px ; padding-bottom: 40px ;}
        .py-sm-11 {padding-top: 44px ; padding-bottom: 44px ;}
        .py-sm-12 {padding-top: 48px ; padding-bottom: 48px ;}
        .py-sm-13 {padding-top: 52px ; padding-bottom: 52px ;}
        .py-sm-14 {padding-top: 56px ; padding-bottom: 56px ;}
        .py-sm-15 {padding-top: 60px ; padding-bottom: 60px ;}
        .py-sm-16 {padding-top: 64px ; padding-bottom: 64px ;}
    
    
        //py negative
        .py-sm-n1 {padding-top: -4px ; padding-bottom: -4px ;}
        .py-sm-n2 {padding-top: -8px ; padding-bottom: -8px ;}
        .py-sm-n3 {padding-top: -12px ; padding-bottom: -12px ;}
        .py-sm-n4 {padding-top: -16px ; padding-bottom: -16px ;}
        .py-sm-n5 {padding-top: -20px ; padding-bottom: -20px ;}
        .py-sm-n6 {padding-top: -24px ; padding-bottom: -24px ;}
        .py-sm-n7 {padding-top: -28px ; padding-bottom: -28px ;}
        .py-sm-n8 {padding-top: -32px ; padding-bottom: -32px ;}
        .py-sm-n9 {padding-top: -36px ; padding-bottom: -36px ;}
        .py-sm-n10 {padding-top: -40px ; padding-bottom: -40px ;}
        .py-sm-n11 {padding-top: -44px ; padding-bottom: -44px ;}
        .py-sm-n12 {padding-top: -48px ; padding-bottom: -48px ;}
        .py-sm-n13 {padding-top: -52px ; padding-bottom: -52px ;}
        .py-sm-n14 {padding-top: -56px ; padding-bottom: -56px ;}
        .py-sm-n15 {padding-top: -60px ; padding-bottom: -60px ;}
        .py-sm-n16 {padding-top: -64px ; padding-bottom: -64px ;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.md}) {
        //pa
        .pa-md-0 {padding: 0 ;}
        .pa-md-1 {padding: 4px ;}
        .pa-md-2 {padding: 8px ;}
        .pa-md-3 {padding: 12px ;}
        .pa-md-4 {padding: 16px ;}
        .pa-md-5 {padding: 20px ;}
        .pa-md-6 {padding: 24px ;}
        .pa-md-7 {padding: 28px ;}
        .pa-md-8 {padding: 32px ;}
        .pa-md-9 {padding: 36px ;}
        .pa-md-10 {padding: 40px ;}
        .pa-md-11 {padding: 44px ;}
        .pa-md-12 {padding: 48px ;}
        .pa-md-13 {padding: 52px ;}
        .pa-md-14 {padding: 56px ;}
        .pa-md-15 {padding: 60px ;}
        .pa-md-16 {padding: 64px ;}
    
        //pa negative
        .pa-md-n1 {padding: -4px ;}
        .pa-md-n2 {padding: -8px ;}
        .pa-md-n3 {padding: -12px ;}
        .pa-md-n4 {padding: -16px ;}
        .pa-md-n5 {padding: -20px ;}
        .pa-md-n6 {padding: -24px ;}
        .pa-md-n7 {padding: -28px ;}
        .pa-md-n8 {padding: -32px ;}
        .pa-md-n9 {padding: -36px ;}
        .pa-md-n10 {padding: -40px ;}
        .pa-md-n11 {padding: -44px ;}
        .pa-md-n12 {padding: -48px ;}
        .pa-md-n13 {padding: -52px ;}
        .pa-md-n14 {padding: -56px ;}
        .pa-md-n15 {padding: -60px ;}
        .pa-md-n16 {padding: -64px ;}
    
        //pt
        .pt-md-0 {padding-top: 0 ;}
        .pt-md-1 {padding-top: 4px ;}
        .pt-md-2 {padding-top: 8px ;}
        .pt-md-3 {padding-top: 12px ;}
        .pt-md-4 {padding-top: 16px ;}
        .pt-md-5 {padding-top: 20px ;}
        .pt-md-6 {padding-top: 24px ;}
        .pt-md-7 {padding-top: 28px ;}
        .pt-md-8 {padding-top: 32px ;}
        .pt-md-9 {padding-top: 36px ;}
        .pt-md-10 {padding-top: 40px ;}
        .pt-md-11 {padding-top: 44px ;}
        .pt-md-12 {padding-top: 48px ;}
        .pt-md-13 {padding-top: 52px ;}
        .pt-md-14 {padding-top: 56px ;}
        .pt-md-15 {padding-top: 60px ;}
        .pt-md-16 {padding-top: 64px ;}
    
        //pt negative
        .pt-md-n1 {padding-top: -4px ;}
        .pt-md-n2 {padding-top: -8px ;}
        .pt-md-n3 {padding-top: -12px ;}
        .pt-md-n4 {padding-top: -16px ;}
        .pt-md-n5 {padding-top: -20px ;}
        .pt-md-n6 {padding-top: -24px ;}
        .pt-md-n7 {padding-top: -28px ;}
        .pt-md-n8 {padding-top: -32px ;}
        .pt-md-n9 {padding-top: -36px ;}
        .pt-md-n10 {padding-top: -40px ;}
        .pt-md-n11 {padding-top: -44px ;}
        .pt-md-n12 {padding-top: -48px ;}
        .pt-md-n13 {padding-top: -52px ;}
        .pt-md-n14 {padding-top: -56px ;}
        .pt-md-n15 {padding-top: -60px ;}
        .pt-md-n16 {padding-top: -64px ;}
    
        //pb
        .pb-md-0 {padding-bottom: 0 ;}
        .pb-md-1 {padding-bottom: 4px ;}
        .pb-md-2 {padding-bottom: 8px ;}
        .pb-md-3 {padding-bottom: 12px ;}
        .pb-md-4 {padding-bottom: 16px ;}
        .pb-md-5 {padding-bottom: 20px ;}
        .pb-md-6 {padding-bottom: 24px ;}
        .pb-md-7 {padding-bottom: 28px ;}
        .pb-md-8 {padding-bottom: 32px ;}
        .pb-md-9 {padding-bottom: 36px ;}
        .pb-md-10 {padding-bottom: 40px ;}
        .pb-md-11 {padding-bottom: 44px ;}
        .pb-md-12 {padding-bottom: 48px ;}
        .pb-md-13 {padding-bottom: 52px ;}
        .pb-md-14 {padding-bottom: 56px ;}
        .pb-md-15 {padding-bottom: 60px ;}
        .pb-md-16 {padding-bottom: 64px ;}
    
    
        //pb negative
        .pb-md-n1 {padding-bottom: -4px ;}
        .pb-md-n2 {padding-bottom: -8px ;}
        .pb-md-n3 {padding-bottom: -12px ;}
        .pb-md-n4 {padding-bottom: -16px ;}
        .pb-md-n5 {padding-bottom: -20px ;}
        .pb-md-n6 {padding-bottom: -24px ;}
        .pb-md-n7 {padding-bottom: -28px ;}
        .pb-md-n8 {padding-bottom: -32px ;}
        .pb-md-n9 {padding-bottom: -36px ;}
        .pb-md-n10 {padding-bottom: -40px ;}
        .pb-md-n11 {padding-bottom: -44px ;}
        .pb-md-n12 {padding-bottom: -48px ;}
        .pb-md-n13 {padding-bottom: -52px ;}
        .pb-md-n14 {padding-bottom: -56px ;}
        .pb-md-n15 {padding-bottom: -60px ;}
        .pb-md-n16 {padding-bottom: -64px ;}
    
        //pl
        .pl-md-0 {padding-left: 0 ;}
        .pl-md-1 {padding-left: 4px ;}
        .pl-md-2 {padding-left: 8px ;}
        .pl-md-3 {padding-left: 12px ;}
        .pl-md-4 {padding-left: 16px ;}
        .pl-md-5 {padding-left: 20px ;}
        .pl-md-6 {padding-left: 24px ;}
        .pl-md-7 {padding-left: 28px ;}
        .pl-md-8 {padding-left: 32px ;}
        .pl-md-9 {padding-left: 36px ;}
        .pl-md-10 {padding-left: 40px ;}
        .pl-md-11 {padding-left: 44px ;}
        .pl-md-12 {padding-left: 48px ;}
        .pl-md-13 {padding-left: 52px ;}
        .pl-md-14 {padding-left: 56px ;}
        .pl-md-15 {padding-left: 60px ;}
        .pl-md-16 {padding-left: 64px ;}
    
        //pl negative
        .pl-md-n1 {padding-left: -4px ;}
        .pl-md-n2 {padding-left: -8px ;}
        .pl-md-n3 {padding-left: -12px ;}
        .pl-md-n4 {padding-left: -16px ;}
        .pl-md-n5 {padding-left: -20px ;}
        .pl-md-n6 {padding-left: -24px ;}
        .pl-md-n7 {padding-left: -28px ;}
        .pl-md-n8 {padding-left: -32px ;}
        .pl-md-n9 {padding-left: -36px ;}
        .pl-md-n10 {padding-left: -40px ;}
        .pl-md-n11 {padding-left: -44px ;}
        .pl-md-n12 {padding-left: -48px ;}
        .pl-md-n13 {padding-left: -52px ;}
        .pl-md-n14 {padding-left: -56px ;}
        .pl-md-n15 {padding-left: -60px ;}
        .pl-md-n16 {padding-left: -64px ;}
    
        //pr
        .pr-md-0 {padding-right: 0 ;}
        .pr-md-1 {padding-right: 4px ;}
        .pr-md-2 {padding-right: 8px ;}
        .pr-md-3 {padding-right: 12px ;}
        .pr-md-4 {padding-right: 16px ;}
        .pr-md-5 {padding-right: 20px ;}
        .pr-md-6 {padding-right: 24px ;}
        .pr-md-7 {padding-right: 28px ;}
        .pr-md-8 {padding-right: 32px ;}
        .pr-md-9 {padding-right: 36px ;}
        .pr-md-10 {padding-right: 40px ;}
        .pr-md-11 {padding-right: 44px ;}
        .pr-md-12 {padding-right: 48px ;}
        .pr-md-13 {padding-right: 52px ;}
        .pr-md-14 {padding-right: 56px ;}
        .pr-md-15 {padding-right: 60px ;}
        .pr-md-16 {padding-right: 64px ;}
    
        //pr negative
        .pr-md-n1 {padding-right: -4px ;}
        .pr-md-n2 {padding-right: -8px ;}
        .pr-md-n3 {padding-right: -12px ;}
        .pr-md-n4 {padding-right: -16px ;}
        .pr-md-n5 {padding-right: -20px ;}
        .pr-md-n6 {padding-right: -24px ;}
        .pr-md-n7 {padding-right: -28px ;}
        .pr-md-n8 {padding-right: -32px ;}
        .pr-md-n9 {padding-right: -36px ;}
        .pr-md-n10 {padding-right: -40px ;}
        .pr-md-n11 {padding-right: -44px ;}
        .pr-md-n12 {padding-right: -48px ;}
        .pr-md-n13 {padding-right: -52px ;}
        .pr-md-n14 {padding-right: -56px ;}
        .pr-md-n15 {padding-right: -60px ;}
        .pr-md-n16 {padding-right: -64px ;}
    
        //px
        .px-md-0 {padding-left: 0 ; padding-right: 0 ;}
        .px-md-1 {padding-left: 4px ; padding-right: 4px ;}
        .px-md-2 {padding-left: 8px ; padding-right: 8px ;}
        .px-md-3 {padding-left: 12px ; padding-right: 12px ;}
        .px-md-4 {padding-left: 16px ; padding-right: 16px ;}
        .px-md-5 {padding-left: 20px ; padding-right: 20px ;}
        .px-md-6 {padding-left: 24px ; padding-right: 24px ;}
        .px-md-7 {padding-left: 28px ; padding-right: 28px ;}
        .px-md-8 {padding-left: 32px ; padding-right: 32px ;}
        .px-md-9 {padding-left: 36px ; padding-right: 36px ;}
        .px-md-10 {padding-left: 40px ; padding-right: 40px ;}
        .px-md-11 {padding-left: 44px ; padding-right: 44px ;}
        .px-md-12 {padding-left: 48px ; padding-right: 48px ;}
        .px-md-13 {padding-left: 52px ; padding-right: 52px ;}
        .px-md-14 {padding-left: 56px ; padding-right: 56px ;}
        .px-md-15 {padding-left: 60px ; padding-right: 60px ;}
        .px-md-16 {padding-left: 64px ; padding-right: 64px ;}
    
        //px negative
        .px-md-n1 {padding-left: -4px ; padding-right: -4px ;}
        .px-md-n2 {padding-left: -8px ; padding-right: -8px ;}
        .px-md-n3 {padding-left: -12px ; padding-right: -12px ;}
        .px-md-n4 {padding-left: -16px ; padding-right: -16px ;}
        .px-md-n5 {padding-left: -20px ; padding-right: -20px ;}
        .px-md-n6 {padding-left: -24px ; padding-right: -24px ;}
        .px-md-n7 {padding-left: -28px ; padding-right: -28px ;}
        .px-md-n8 {padding-left: -32px ; padding-right: -32px ;}
        .px-md-n9 {padding-left: -36px ; padding-right: -36px ;}
        .px-md-n10 {padding-left: -40px ; padding-right: -40px ;}
        .px-md-n11 {padding-left: -44px ; padding-right: -44px ;}
        .px-md-n12 {padding-left: -48px ; padding-right: -48px ;}
        .px-md-n13 {padding-left: -52px ; padding-right: -52px ;}
        .px-md-n14 {padding-left: -56px ; padding-right: -56px ;}
        .px-md-n15 {padding-left: -60px ; padding-right: -60px ;}
        .px-md-n16 {padding-left: -64px ; padding-right: -64px ;}
    
    
        //py
        .py-md-0 {padding-top: 0 ; padding-bottom: 0 ;}
        .py-md-1 {padding-top: 4px ; padding-bottom: 4px ;}
        .py-md-2 {padding-top: 8px ; padding-bottom: 8px ;}
        .py-md-3 {padding-top: 12px ; padding-bottom: 12px ;}
        .py-md-4 {padding-top: 16px ; padding-bottom: 16px ;}
        .py-md-5 {padding-top: 20px ; padding-bottom: 20px ;}
        .py-md-6 {padding-top: 24px ; padding-bottom: 24px ;}
        .py-md-7 {padding-top: 28px ; padding-bottom: 28px ;}
        .py-md-8 {padding-top: 32px ; padding-bottom: 32px ;}
        .py-md-9 {padding-top: 36px ; padding-bottom: 36px ;}
        .py-md-10 {padding-top: 40px ; padding-bottom: 40px ;}
        .py-md-11 {padding-top: 44px ; padding-bottom: 44px ;}
        .py-md-12 {padding-top: 48px ; padding-bottom: 48px ;}
        .py-md-13 {padding-top: 52px ; padding-bottom: 52px ;}
        .py-md-14 {padding-top: 56px ; padding-bottom: 56px ;}
        .py-md-15 {padding-top: 60px ; padding-bottom: 60px ;}
        .py-md-16 {padding-top: 64px ; padding-bottom: 64px ;}
    
    
        //py negative
        .py-md-n1 {padding-top: -4px ; padding-bottom: -4px ;}
        .py-md-n2 {padding-top: -8px ; padding-bottom: -8px ;}
        .py-md-n3 {padding-top: -12px ; padding-bottom: -12px ;}
        .py-md-n4 {padding-top: -16px ; padding-bottom: -16px ;}
        .py-md-n5 {padding-top: -20px ; padding-bottom: -20px ;}
        .py-md-n6 {padding-top: -24px ; padding-bottom: -24px ;}
        .py-md-n7 {padding-top: -28px ; padding-bottom: -28px ;}
        .py-md-n8 {padding-top: -32px ; padding-bottom: -32px ;}
        .py-md-n9 {padding-top: -36px ; padding-bottom: -36px ;}
        .py-md-n10 {padding-top: -40px ; padding-bottom: -40px ;}
        .py-md-n11 {padding-top: -44px ; padding-bottom: -44px ;}
        .py-md-n12 {padding-top: -48px ; padding-bottom: -48px ;}
        .py-md-n13 {padding-top: -52px ; padding-bottom: -52px ;}
        .py-md-n14 {padding-top: -56px ; padding-bottom: -56px ;}
        .py-md-n15 {padding-top: -60px ; padding-bottom: -60px ;}
        .py-md-n16 {padding-top: -64px ; padding-bottom: -64px ;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.lg}) {
        //pa
        .pa-lg-0 {padding: 0 ;}
        .pa-lg-1 {padding: 4px ;}
        .pa-lg-2 {padding: 8px ;}
        .pa-lg-3 {padding: 12px ;}
        .pa-lg-4 {padding: 16px ;}
        .pa-lg-5 {padding: 20px ;}
        .pa-lg-6 {padding: 24px ;}
        .pa-lg-7 {padding: 28px ;}
        .pa-lg-8 {padding: 32px ;}
        .pa-lg-9 {padding: 36px ;}
        .pa-lg-10 {padding: 40px ;}
        .pa-lg-11 {padding: 44px ;}
        .pa-lg-12 {padding: 48px ;}
        .pa-lg-13 {padding: 52px ;}
        .pa-lg-14 {padding: 56px ;}
        .pa-lg-15 {padding: 60px ;}
        .pa-lg-16 {padding: 64px ;}
    
        //pa negative
        .pa-lg-n1 {padding: -4px ;}
        .pa-lg-n2 {padding: -8px ;}
        .pa-lg-n3 {padding: -12px ;}
        .pa-lg-n4 {padding: -16px ;}
        .pa-lg-n5 {padding: -20px ;}
        .pa-lg-n6 {padding: -24px ;}
        .pa-lg-n7 {padding: -28px ;}
        .pa-lg-n8 {padding: -32px ;}
        .pa-lg-n9 {padding: -36px ;}
        .pa-lg-n10 {padding: -40px ;}
        .pa-lg-n11 {padding: -44px ;}
        .pa-lg-n12 {padding: -48px ;}
        .pa-lg-n13 {padding: -52px ;}
        .pa-lg-n14 {padding: -56px ;}
        .pa-lg-n15 {padding: -60px ;}
        .pa-lg-n16 {padding: -64px ;}
    
        //pt
        .pt-lg-0 {padding-top: 0 ;}
        .pt-lg-1 {padding-top: 4px ;}
        .pt-lg-2 {padding-top: 8px ;}
        .pt-lg-3 {padding-top: 12px ;}
        .pt-lg-4 {padding-top: 16px ;}
        .pt-lg-5 {padding-top: 20px ;}
        .pt-lg-6 {padding-top: 24px ;}
        .pt-lg-7 {padding-top: 28px ;}
        .pt-lg-8 {padding-top: 32px ;}
        .pt-lg-9 {padding-top: 36px ;}
        .pt-lg-10 {padding-top: 40px ;}
        .pt-lg-11 {padding-top: 44px ;}
        .pt-lg-12 {padding-top: 48px ;}
        .pt-lg-13 {padding-top: 52px ;}
        .pt-lg-14 {padding-top: 56px ;}
        .pt-lg-15 {padding-top: 60px ;}
        .pt-lg-16 {padding-top: 64px ;}
    
        //pt negative
        .pt-lg-n1 {padding-top: -4px ;}
        .pt-lg-n2 {padding-top: -8px ;}
        .pt-lg-n3 {padding-top: -12px ;}
        .pt-lg-n4 {padding-top: -16px ;}
        .pt-lg-n5 {padding-top: -20px ;}
        .pt-lg-n6 {padding-top: -24px ;}
        .pt-lg-n7 {padding-top: -28px ;}
        .pt-lg-n8 {padding-top: -32px ;}
        .pt-lg-n9 {padding-top: -36px ;}
        .pt-lg-n10 {padding-top: -40px ;}
        .pt-lg-n11 {padding-top: -44px ;}
        .pt-lg-n12 {padding-top: -48px ;}
        .pt-lg-n13 {padding-top: -52px ;}
        .pt-lg-n14 {padding-top: -56px ;}
        .pt-lg-n15 {padding-top: -60px ;}
        .pt-lg-n16 {padding-top: -64px ;}
    
        //pb
        .pb-lg-0 {padding-bottom: 0 ;}
        .pb-lg-1 {padding-bottom: 4px ;}
        .pb-lg-2 {padding-bottom: 8px ;}
        .pb-lg-3 {padding-bottom: 12px ;}
        .pb-lg-4 {padding-bottom: 16px ;}
        .pb-lg-5 {padding-bottom: 20px ;}
        .pb-lg-6 {padding-bottom: 24px ;}
        .pb-lg-7 {padding-bottom: 28px ;}
        .pb-lg-8 {padding-bottom: 32px ;}
        .pb-lg-9 {padding-bottom: 36px ;}
        .pb-lg-10 {padding-bottom: 40px ;}
        .pb-lg-11 {padding-bottom: 44px ;}
        .pb-lg-12 {padding-bottom: 48px ;}
        .pb-lg-13 {padding-bottom: 52px ;}
        .pb-lg-14 {padding-bottom: 56px ;}
        .pb-lg-15 {padding-bottom: 60px ;}
        .pb-lg-16 {padding-bottom: 64px ;}
    
    
        //pb negative
        .pb-lg-n1 {padding-bottom: -4px ;}
        .pb-lg-n2 {padding-bottom: -8px ;}
        .pb-lg-n3 {padding-bottom: -12px ;}
        .pb-lg-n4 {padding-bottom: -16px ;}
        .pb-lg-n5 {padding-bottom: -20px ;}
        .pb-lg-n6 {padding-bottom: -24px ;}
        .pb-lg-n7 {padding-bottom: -28px ;}
        .pb-lg-n8 {padding-bottom: -32px ;}
        .pb-lg-n9 {padding-bottom: -36px ;}
        .pb-lg-n10 {padding-bottom: -40px ;}
        .pb-lg-n11 {padding-bottom: -44px ;}
        .pb-lg-n12 {padding-bottom: -48px ;}
        .pb-lg-n13 {padding-bottom: -52px ;}
        .pb-lg-n14 {padding-bottom: -56px ;}
        .pb-lg-n15 {padding-bottom: -60px ;}
        .pb-lg-n16 {padding-bottom: -64px ;}
    
        //pl
        .pl-lg-0 {padding-left: 0 ;}
        .pl-lg-1 {padding-left: 4px ;}
        .pl-lg-2 {padding-left: 8px ;}
        .pl-lg-3 {padding-left: 12px ;}
        .pl-lg-4 {padding-left: 16px ;}
        .pl-lg-5 {padding-left: 20px ;}
        .pl-lg-6 {padding-left: 24px ;}
        .pl-lg-7 {padding-left: 28px ;}
        .pl-lg-8 {padding-left: 32px ;}
        .pl-lg-9 {padding-left: 36px ;}
        .pl-lg-10 {padding-left: 40px ;}
        .pl-lg-11 {padding-left: 44px ;}
        .pl-lg-12 {padding-left: 48px ;}
        .pl-lg-13 {padding-left: 52px ;}
        .pl-lg-14 {padding-left: 56px ;}
        .pl-lg-15 {padding-left: 60px ;}
        .pl-lg-16 {padding-left: 64px ;}
    
        //pl negative
        .pl-lg-n1 {padding-left: -4px ;}
        .pl-lg-n2 {padding-left: -8px ;}
        .pl-lg-n3 {padding-left: -12px ;}
        .pl-lg-n4 {padding-left: -16px ;}
        .pl-lg-n5 {padding-left: -20px ;}
        .pl-lg-n6 {padding-left: -24px ;}
        .pl-lg-n7 {padding-left: -28px ;}
        .pl-lg-n8 {padding-left: -32px ;}
        .pl-lg-n9 {padding-left: -36px ;}
        .pl-lg-n10 {padding-left: -40px ;}
        .pl-lg-n11 {padding-left: -44px ;}
        .pl-lg-n12 {padding-left: -48px ;}
        .pl-lg-n13 {padding-left: -52px ;}
        .pl-lg-n14 {padding-left: -56px ;}
        .pl-lg-n15 {padding-left: -60px ;}
        .pl-lg-n16 {padding-left: -64px ;}
    
        //pr
        .pr-lg-0 {padding-right: 0 ;}
        .pr-lg-1 {padding-right: 4px ;}
        .pr-lg-2 {padding-right: 8px ;}
        .pr-lg-3 {padding-right: 12px ;}
        .pr-lg-4 {padding-right: 16px ;}
        .pr-lg-5 {padding-right: 20px ;}
        .pr-lg-6 {padding-right: 24px ;}
        .pr-lg-7 {padding-right: 28px ;}
        .pr-lg-8 {padding-right: 32px ;}
        .pr-lg-9 {padding-right: 36px ;}
        .pr-lg-10 {padding-right: 40px ;}
        .pr-lg-11 {padding-right: 44px ;}
        .pr-lg-12 {padding-right: 48px ;}
        .pr-lg-13 {padding-right: 52px ;}
        .pr-lg-14 {padding-right: 56px ;}
        .pr-lg-15 {padding-right: 60px ;}
        .pr-lg-16 {padding-right: 64px ;}
    
        //pr negative
        .pr-lg-n1 {padding-right: -4px ;}
        .pr-lg-n2 {padding-right: -8px ;}
        .pr-lg-n3 {padding-right: -12px ;}
        .pr-lg-n4 {padding-right: -16px ;}
        .pr-lg-n5 {padding-right: -20px ;}
        .pr-lg-n6 {padding-right: -24px ;}
        .pr-lg-n7 {padding-right: -28px ;}
        .pr-lg-n8 {padding-right: -32px ;}
        .pr-lg-n9 {padding-right: -36px ;}
        .pr-lg-n10 {padding-right: -40px ;}
        .pr-lg-n11 {padding-right: -44px ;}
        .pr-lg-n12 {padding-right: -48px ;}
        .pr-lg-n13 {padding-right: -52px ;}
        .pr-lg-n14 {padding-right: -56px ;}
        .pr-lg-n15 {padding-right: -60px ;}
        .pr-lg-n16 {padding-right: -64px ;}
    
        //px
        .px-lg-0 {padding-left: 0 ; padding-right: 0 ;}
        .px-lg-1 {padding-left: 4px ; padding-right: 4px ;}
        .px-lg-2 {padding-left: 8px ; padding-right: 8px ;}
        .px-lg-3 {padding-left: 12px ; padding-right: 12px ;}
        .px-lg-4 {padding-left: 16px ; padding-right: 16px ;}
        .px-lg-5 {padding-left: 20px ; padding-right: 20px ;}
        .px-lg-6 {padding-left: 24px ; padding-right: 24px ;}
        .px-lg-7 {padding-left: 28px ; padding-right: 28px ;}
        .px-lg-8 {padding-left: 32px ; padding-right: 32px ;}
        .px-lg-9 {padding-left: 36px ; padding-right: 36px ;}
        .px-lg-10 {padding-left: 40px ; padding-right: 40px ;}
        .px-lg-11 {padding-left: 44px ; padding-right: 44px ;}
        .px-lg-12 {padding-left: 48px ; padding-right: 48px ;}
        .px-lg-13 {padding-left: 52px ; padding-right: 52px ;}
        .px-lg-14 {padding-left: 56px ; padding-right: 56px ;}
        .px-lg-15 {padding-left: 60px ; padding-right: 60px ;}
        .px-lg-16 {padding-left: 64px ; padding-right: 64px ;}
    
        //px negative
        .px-lg-n1 {padding-left: -4px ; padding-right: -4px ;}
        .px-lg-n2 {padding-left: -8px ; padding-right: -8px ;}
        .px-lg-n3 {padding-left: -12px ; padding-right: -12px ;}
        .px-lg-n4 {padding-left: -16px ; padding-right: -16px ;}
        .px-lg-n5 {padding-left: -20px ; padding-right: -20px ;}
        .px-lg-n6 {padding-left: -24px ; padding-right: -24px ;}
        .px-lg-n7 {padding-left: -28px ; padding-right: -28px ;}
        .px-lg-n8 {padding-left: -32px ; padding-right: -32px ;}
        .px-lg-n9 {padding-left: -36px ; padding-right: -36px ;}
        .px-lg-n10 {padding-left: -40px ; padding-right: -40px ;}
        .px-lg-n11 {padding-left: -44px ; padding-right: -44px ;}
        .px-lg-n12 {padding-left: -48px ; padding-right: -48px ;}
        .px-lg-n13 {padding-left: -52px ; padding-right: -52px ;}
        .px-lg-n14 {padding-left: -56px ; padding-right: -56px ;}
        .px-lg-n15 {padding-left: -60px ; padding-right: -60px ;}
        .px-lg-n16 {padding-left: -64px ; padding-right: -64px ;}
    
    
        //py
        .py-lg-0 {padding-top: 0 ; padding-bottom: 0 ;}
        .py-lg-1 {padding-top: 4px ; padding-bottom: 4px ;}
        .py-lg-2 {padding-top: 8px ; padding-bottom: 8px ;}
        .py-lg-3 {padding-top: 12px ; padding-bottom: 12px ;}
        .py-lg-4 {padding-top: 16px ; padding-bottom: 16px ;}
        .py-lg-5 {padding-top: 20px ; padding-bottom: 20px ;}
        .py-lg-6 {padding-top: 24px ; padding-bottom: 24px ;}
        .py-lg-7 {padding-top: 28px ; padding-bottom: 28px ;}
        .py-lg-8 {padding-top: 32px ; padding-bottom: 32px ;}
        .py-lg-9 {padding-top: 36px ; padding-bottom: 36px ;}
        .py-lg-10 {padding-top: 40px ; padding-bottom: 40px ;}
        .py-lg-11 {padding-top: 44px ; padding-bottom: 44px ;}
        .py-lg-12 {padding-top: 48px ; padding-bottom: 48px ;}
        .py-lg-13 {padding-top: 52px ; padding-bottom: 52px ;}
        .py-lg-14 {padding-top: 56px ; padding-bottom: 56px ;}
        .py-lg-15 {padding-top: 60px ; padding-bottom: 60px ;}
        .py-lg-16 {padding-top: 64px ; padding-bottom: 64px ;}
    
    
        //py negative
        .py-lg-n1 {padding-top: -4px ; padding-bottom: -4px ;}
        .py-lg-n2 {padding-top: -8px ; padding-bottom: -8px ;}
        .py-lg-n3 {padding-top: -12px ; padding-bottom: -12px ;}
        .py-lg-n4 {padding-top: -16px ; padding-bottom: -16px ;}
        .py-lg-n5 {padding-top: -20px ; padding-bottom: -20px ;}
        .py-lg-n6 {padding-top: -24px ; padding-bottom: -24px ;}
        .py-lg-n7 {padding-top: -28px ; padding-bottom: -28px ;}
        .py-lg-n8 {padding-top: -32px ; padding-bottom: -32px ;}
        .py-lg-n9 {padding-top: -36px ; padding-bottom: -36px ;}
        .py-lg-n10 {padding-top: -40px ; padding-bottom: -40px ;}
        .py-lg-n11 {padding-top: -44px ; padding-bottom: -44px ;}
        .py-lg-n12 {padding-top: -48px ; padding-bottom: -48px ;}
        .py-lg-n13 {padding-top: -52px ; padding-bottom: -52px ;}
        .py-lg-n14 {padding-top: -56px ; padding-bottom: -56px ;}
        .py-lg-n15 {padding-top: -60px ; padding-bottom: -60px ;}
        .py-lg-n16 {padding-top: -64px ; padding-bottom: -64px ;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.xl}) {
        //pa
        .pa-xl-0 {padding: 0 ;}
        .pa-xl-1 {padding: 4px ;}
        .pa-xl-2 {padding: 8px ;}
        .pa-xl-3 {padding: 12px ;}
        .pa-xl-4 {padding: 16px ;}
        .pa-xl-5 {padding: 20px ;}
        .pa-xl-6 {padding: 24px ;}
        .pa-xl-7 {padding: 28px ;}
        .pa-xl-8 {padding: 32px ;}
        .pa-xl-9 {padding: 36px ;}
        .pa-xl-10 {padding: 40px ;}
        .pa-xl-11 {padding: 44px ;}
        .pa-xl-12 {padding: 48px ;}
        .pa-xl-13 {padding: 52px ;}
        .pa-xl-14 {padding: 56px ;}
        .pa-xl-15 {padding: 60px ;}
        .pa-xl-16 {padding: 64px ;}
    
        //pa negative
        .pa-xl-n1 {padding: -4px ;}
        .pa-xl-n2 {padding: -8px ;}
        .pa-xl-n3 {padding: -12px ;}
        .pa-xl-n4 {padding: -16px ;}
        .pa-xl-n5 {padding: -20px ;}
        .pa-xl-n6 {padding: -24px ;}
        .pa-xl-n7 {padding: -28px ;}
        .pa-xl-n8 {padding: -32px ;}
        .pa-xl-n9 {padding: -36px ;}
        .pa-xl-n10 {padding: -40px ;}
        .pa-xl-n11 {padding: -44px ;}
        .pa-xl-n12 {padding: -48px ;}
        .pa-xl-n13 {padding: -52px ;}
        .pa-xl-n14 {padding: -56px ;}
        .pa-xl-n15 {padding: -60px ;}
        .pa-xl-n16 {padding: -64px ;}
    
        //pt
        .pt-xl-0 {padding-top: 0 ;}
        .pt-xl-1 {padding-top: 4px ;}
        .pt-xl-2 {padding-top: 8px ;}
        .pt-xl-3 {padding-top: 12px ;}
        .pt-xl-4 {padding-top: 16px ;}
        .pt-xl-5 {padding-top: 20px ;}
        .pt-xl-6 {padding-top: 24px ;}
        .pt-xl-7 {padding-top: 28px ;}
        .pt-xl-8 {padding-top: 32px ;}
        .pt-xl-9 {padding-top: 36px ;}
        .pt-xl-10 {padding-top: 40px ;}
        .pt-xl-11 {padding-top: 44px ;}
        .pt-xl-12 {padding-top: 48px ;}
        .pt-xl-13 {padding-top: 52px ;}
        .pt-xl-14 {padding-top: 56px ;}
        .pt-xl-15 {padding-top: 60px ;}
        .pt-xl-16 {padding-top: 64px ;}
    
        //pt negative
        .pt-xl-n1 {padding-top: -4px ;}
        .pt-xl-n2 {padding-top: -8px ;}
        .pt-xl-n3 {padding-top: -12px ;}
        .pt-xl-n4 {padding-top: -16px ;}
        .pt-xl-n5 {padding-top: -20px ;}
        .pt-xl-n6 {padding-top: -24px ;}
        .pt-xl-n7 {padding-top: -28px ;}
        .pt-xl-n8 {padding-top: -32px ;}
        .pt-xl-n9 {padding-top: -36px ;}
        .pt-xl-n10 {padding-top: -40px ;}
        .pt-xl-n11 {padding-top: -44px ;}
        .pt-xl-n12 {padding-top: -48px ;}
        .pt-xl-n13 {padding-top: -52px ;}
        .pt-xl-n14 {padding-top: -56px ;}
        .pt-xl-n15 {padding-top: -60px ;}
        .pt-xl-n16 {padding-top: -64px ;}
    
        //pb
        .pb-xl-0 {padding-bottom: 0 ;}
        .pb-xl-1 {padding-bottom: 4px ;}
        .pb-xl-2 {padding-bottom: 8px ;}
        .pb-xl-3 {padding-bottom: 12px ;}
        .pb-xl-4 {padding-bottom: 16px ;}
        .pb-xl-5 {padding-bottom: 20px ;}
        .pb-xl-6 {padding-bottom: 24px ;}
        .pb-xl-7 {padding-bottom: 28px ;}
        .pb-xl-8 {padding-bottom: 32px ;}
        .pb-xl-9 {padding-bottom: 36px ;}
        .pb-xl-10 {padding-bottom: 40px ;}
        .pb-xl-11 {padding-bottom: 44px ;}
        .pb-xl-12 {padding-bottom: 48px ;}
        .pb-xl-13 {padding-bottom: 52px ;}
        .pb-xl-14 {padding-bottom: 56px ;}
        .pb-xl-15 {padding-bottom: 60px ;}
        .pb-xl-16 {padding-bottom: 64px ;}
    
    
        //pb negative
        .pb-xl-n1 {padding-bottom: -4px ;}
        .pb-xl-n2 {padding-bottom: -8px ;}
        .pb-xl-n3 {padding-bottom: -12px ;}
        .pb-xl-n4 {padding-bottom: -16px ;}
        .pb-xl-n5 {padding-bottom: -20px ;}
        .pb-xl-n6 {padding-bottom: -24px ;}
        .pb-xl-n7 {padding-bottom: -28px ;}
        .pb-xl-n8 {padding-bottom: -32px ;}
        .pb-xl-n9 {padding-bottom: -36px ;}
        .pb-xl-n10 {padding-bottom: -40px ;}
        .pb-xl-n11 {padding-bottom: -44px ;}
        .pb-xl-n12 {padding-bottom: -48px ;}
        .pb-xl-n13 {padding-bottom: -52px ;}
        .pb-xl-n14 {padding-bottom: -56px ;}
        .pb-xl-n15 {padding-bottom: -60px ;}
        .pb-xl-n16 {padding-bottom: -64px ;}
    
        //pl
        .pl-xl-0 {padding-left: 0 ;}
        .pl-xl-1 {padding-left: 4px ;}
        .pl-xl-2 {padding-left: 8px ;}
        .pl-xl-3 {padding-left: 12px ;}
        .pl-xl-4 {padding-left: 16px ;}
        .pl-xl-5 {padding-left: 20px ;}
        .pl-xl-6 {padding-left: 24px ;}
        .pl-xl-7 {padding-left: 28px ;}
        .pl-xl-8 {padding-left: 32px ;}
        .pl-xl-9 {padding-left: 36px ;}
        .pl-xl-10 {padding-left: 40px ;}
        .pl-xl-11 {padding-left: 44px ;}
        .pl-xl-12 {padding-left: 48px ;}
        .pl-xl-13 {padding-left: 52px ;}
        .pl-xl-14 {padding-left: 56px ;}
        .pl-xl-15 {padding-left: 60px ;}
        .pl-xl-16 {padding-left: 64px ;}
    
        //pl negative
        .pl-xl-n1 {padding-left: -4px ;}
        .pl-xl-n2 {padding-left: -8px ;}
        .pl-xl-n3 {padding-left: -12px ;}
        .pl-xl-n4 {padding-left: -16px ;}
        .pl-xl-n5 {padding-left: -20px ;}
        .pl-xl-n6 {padding-left: -24px ;}
        .pl-xl-n7 {padding-left: -28px ;}
        .pl-xl-n8 {padding-left: -32px ;}
        .pl-xl-n9 {padding-left: -36px ;}
        .pl-xl-n10 {padding-left: -40px ;}
        .pl-xl-n11 {padding-left: -44px ;}
        .pl-xl-n12 {padding-left: -48px ;}
        .pl-xl-n13 {padding-left: -52px ;}
        .pl-xl-n14 {padding-left: -56px ;}
        .pl-xl-n15 {padding-left: -60px ;}
        .pl-xl-n16 {padding-left: -64px ;}
    
        //pr
        .pr-xl-0 {padding-right: 0 ;}
        .pr-xl-1 {padding-right: 4px ;}
        .pr-xl-2 {padding-right: 8px ;}
        .pr-xl-3 {padding-right: 12px ;}
        .pr-xl-4 {padding-right: 16px ;}
        .pr-xl-5 {padding-right: 20px ;}
        .pr-xl-6 {padding-right: 24px ;}
        .pr-xl-7 {padding-right: 28px ;}
        .pr-xl-8 {padding-right: 32px ;}
        .pr-xl-9 {padding-right: 36px ;}
        .pr-xl-10 {padding-right: 40px ;}
        .pr-xl-11 {padding-right: 44px ;}
        .pr-xl-12 {padding-right: 48px ;}
        .pr-xl-13 {padding-right: 52px ;}
        .pr-xl-14 {padding-right: 56px ;}
        .pr-xl-15 {padding-right: 60px ;}
        .pr-xl-16 {padding-right: 64px ;}
    
        //pr negative
        .pr-xl-n1 {padding-right: -4px ;}
        .pr-xl-n2 {padding-right: -8px ;}
        .pr-xl-n3 {padding-right: -12px ;}
        .pr-xl-n4 {padding-right: -16px ;}
        .pr-xl-n5 {padding-right: -20px ;}
        .pr-xl-n6 {padding-right: -24px ;}
        .pr-xl-n7 {padding-right: -28px ;}
        .pr-xl-n8 {padding-right: -32px ;}
        .pr-xl-n9 {padding-right: -36px ;}
        .pr-xl-n10 {padding-right: -40px ;}
        .pr-xl-n11 {padding-right: -44px ;}
        .pr-xl-n12 {padding-right: -48px ;}
        .pr-xl-n13 {padding-right: -52px ;}
        .pr-xl-n14 {padding-right: -56px ;}
        .pr-xl-n15 {padding-right: -60px ;}
        .pr-xl-n16 {padding-right: -64px ;}
    
        //px
        .px-xl-0 {padding-left: 0 ; padding-right: 0 ;}
        .px-xl-1 {padding-left: 4px ; padding-right: 4px ;}
        .px-xl-2 {padding-left: 8px ; padding-right: 8px ;}
        .px-xl-3 {padding-left: 12px ; padding-right: 12px ;}
        .px-xl-4 {padding-left: 16px ; padding-right: 16px ;}
        .px-xl-5 {padding-left: 20px ; padding-right: 20px ;}
        .px-xl-6 {padding-left: 24px ; padding-right: 24px ;}
        .px-xl-7 {padding-left: 28px ; padding-right: 28px ;}
        .px-xl-8 {padding-left: 32px ; padding-right: 32px ;}
        .px-xl-9 {padding-left: 36px ; padding-right: 36px ;}
        .px-xl-10 {padding-left: 40px ; padding-right: 40px ;}
        .px-xl-11 {padding-left: 44px ; padding-right: 44px ;}
        .px-xl-12 {padding-left: 48px ; padding-right: 48px ;}
        .px-xl-13 {padding-left: 52px ; padding-right: 52px ;}
        .px-xl-14 {padding-left: 56px ; padding-right: 56px ;}
        .px-xl-15 {padding-left: 60px ; padding-right: 60px ;}
        .px-xl-16 {padding-left: 64px ; padding-right: 64px ;}
    
        //px negative
        .px-xl-n1 {padding-left: -4px ; padding-right: -4px ;}
        .px-xl-n2 {padding-left: -8px ; padding-right: -8px ;}
        .px-xl-n3 {padding-left: -12px ; padding-right: -12px ;}
        .px-xl-n4 {padding-left: -16px ; padding-right: -16px ;}
        .px-xl-n5 {padding-left: -20px ; padding-right: -20px ;}
        .px-xl-n6 {padding-left: -24px ; padding-right: -24px ;}
        .px-xl-n7 {padding-left: -28px ; padding-right: -28px ;}
        .px-xl-n8 {padding-left: -32px ; padding-right: -32px ;}
        .px-xl-n9 {padding-left: -36px ; padding-right: -36px ;}
        .px-xl-n10 {padding-left: -40px ; padding-right: -40px ;}
        .px-xl-n11 {padding-left: -44px ; padding-right: -44px ;}
        .px-xl-n12 {padding-left: -48px ; padding-right: -48px ;}
        .px-xl-n13 {padding-left: -52px ; padding-right: -52px ;}
        .px-xl-n14 {padding-left: -56px ; padding-right: -56px ;}
        .px-xl-n15 {padding-left: -60px ; padding-right: -60px ;}
        .px-xl-n16 {padding-left: -64px ; padding-right: -64px ;}
    
    
        //py
        .py-xl-0 {padding-top: 0 ; padding-bottom: 0 ;}
        .py-xl-1 {padding-top: 4px ; padding-bottom: 4px ;}
        .py-xl-2 {padding-top: 8px ; padding-bottom: 8px ;}
        .py-xl-3 {padding-top: 12px ; padding-bottom: 12px ;}
        .py-xl-4 {padding-top: 16px ; padding-bottom: 16px ;}
        .py-xl-5 {padding-top: 20px ; padding-bottom: 20px ;}
        .py-xl-6 {padding-top: 24px ; padding-bottom: 24px ;}
        .py-xl-7 {padding-top: 28px ; padding-bottom: 28px ;}
        .py-xl-8 {padding-top: 32px ; padding-bottom: 32px ;}
        .py-xl-9 {padding-top: 36px ; padding-bottom: 36px ;}
        .py-xl-10 {padding-top: 40px ; padding-bottom: 40px ;}
        .py-xl-11 {padding-top: 44px ; padding-bottom: 44px ;}
        .py-xl-12 {padding-top: 48px ; padding-bottom: 48px ;}
        .py-xl-13 {padding-top: 52px ; padding-bottom: 52px ;}
        .py-xl-14 {padding-top: 56px ; padding-bottom: 56px ;}
        .py-xl-15 {padding-top: 60px ; padding-bottom: 60px ;}
        .py-xl-16 {padding-top: 64px ; padding-bottom: 64px ;}
    
    
        //py negative
        .py-xl-n1 {padding-top: -4px ; padding-bottom: -4px ;}
        .py-xl-n2 {padding-top: -8px ; padding-bottom: -8px ;}
        .py-xl-n3 {padding-top: -12px ; padding-bottom: -12px ;}
        .py-xl-n4 {padding-top: -16px ; padding-bottom: -16px ;}
        .py-xl-n5 {padding-top: -20px ; padding-bottom: -20px ;}
        .py-xl-n6 {padding-top: -24px ; padding-bottom: -24px ;}
        .py-xl-n7 {padding-top: -28px ; padding-bottom: -28px ;}
        .py-xl-n8 {padding-top: -32px ; padding-bottom: -32px ;}
        .py-xl-n9 {padding-top: -36px ; padding-bottom: -36px ;}
        .py-xl-n10 {padding-top: -40px ; padding-bottom: -40px ;}
        .py-xl-n11 {padding-top: -44px ; padding-bottom: -44px ;}
        .py-xl-n12 {padding-top: -48px ; padding-bottom: -48px ;}
        .py-xl-n13 {padding-top: -52px ; padding-bottom: -52px ;}
        .py-xl-n14 {padding-top: -56px ; padding-bottom: -56px ;}
        .py-xl-n15 {padding-top: -60px ; padding-bottom: -60px ;}
        .py-xl-n16 {padding-top: -64px ; padding-bottom: -64px ;}
    }
`;
};

export default padding;
