package org.dakkala.uhca.backup;

import net.bytebuddy.implementation.bind.annotation.Origin;
import net.bytebuddy.implementation.bind.annotation.RuntimeType;
import net.bytebuddy.implementation.bind.annotation.SuperCall;

import java.lang.reflect.Method;
import java.util.concurrent.Callable;
import java.util.logging.Logger;

public class TimingInterceptor {

    static Logger log=Logger.getLogger(TimingInterceptor.class.getName());
    @RuntimeType
    public static Object intercept(@Origin Method method,
                                   @SuperCall Callable<?> callable) {
        long start = System.currentTimeMillis();
        try {
            return callable.call();
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            log.fine(">>> " + method + " took " + (System.currentTimeMillis() - start));
        }
        return null;
    }
}