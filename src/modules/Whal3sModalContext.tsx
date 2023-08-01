import React, { createContext, useReducer, useEffect, Dispatch } from 'react'
import Whal3s, { NftValidationUtility, WalletProviderInterface } from '@whal3s/whal3s.js'
import Whal3sModal from "../components/Modal/Modal";

interface Whal3sModalState {
    open: boolean,
    utility: any|undefined,
    step: number
}

// Create the context
interface ContextType {
    state: Whal3sModalState,
    dispatch: Dispatch<{type: 'SET_OPEN'|'SET_UTILITY'|'SET_STEP', payload:any}>
}

const Whal3sModalContext = createContext<ContextType>({
    state: {
        open: false,
        utility: undefined,
        step: 0
    },
    dispatch: () => {}
});

// Create the reducer function
const whal3sModalReducer = (state: Whal3sModalState, action:{type: 'SET_OPEN'|'SET_UTILITY'|'SET_STEP', payload:any}) => {
    switch (action.type) {
        case 'SET_OPEN':
            return { ...state, open: action.payload };
        case 'SET_UTILITY':
            return { ...state, utility: action.payload };
        case 'SET_STEP':
            return { ...state, step: action.payload };
        default:
            return state;
    }
};

interface Whal3sModalProviderProps {
    children: React.ReactNode,
    utilityId: string,
    provider: WalletProviderInterface,
    modalImage?: string
}

const Whal3sModalProvider = ({ children, utilityId, provider, modalImage }: Whal3sModalProviderProps) => {
    const [state, dispatch] = useReducer(whal3sModalReducer, {
        open: false,
        utility: undefined,
        step: 0
    });

    const init = async () => {
        const whal3s = new Whal3s(provider)
        const utility = await whal3s.createValidationUtility(utilityId)
        utility.addEventListener('stepChanged', (step:any) => {
            dispatch({type: 'SET_UTILITY', payload: utility})
            dispatch({type: 'SET_STEP', payload: step.detail.step})
            // if (step.detail.step === NftValidationUtility.STEP_RESERVED) {
            //     setTimeout(() => {
            //         dispatch({type: 'SET_OPEN', payload: false})
            //     }, 1500)
            // }
        })
        dispatch({type: 'SET_UTILITY', payload: utility})
    }

    useEffect(() => {
        init()
    }, []);

    useEffect(() => {
        dispatch({type: 'SET_UTILITY', payload: state.utility})
        dispatch({type: 'SET_STEP', payload: state.utility?.step || NftValidationUtility.STEP_UNINITIALIZED})
    }, [state.utility]);

    return (
      <Whal3sModalContext.Provider value={{ state, dispatch }}>
          {children}
          <Whal3sModal image={modalImage} />
      </Whal3sModalContext.Provider>
    );
};

export { Whal3sModalContext, Whal3sModalProvider };
